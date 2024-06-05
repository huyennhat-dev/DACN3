import slug from "slug";
import historyModel from "~/models/history";
import playlistModel from "~/models/playlist";
import soundModel from "~/models/sound";
import userModel from "~/models/user";
import ApiError from "~/utils/ApiError";
import { verifyAccessToken } from "~/utils/token";

const homeController = {
  home: async (req, res, next) => {
    try {
      const token = req.query.token;
      let modifierNewRelease = [];
      let modifierRecent = [];

      const newRelease = await soundModel
        .find({ status: true })
        .populate({
          path: "user",
          select: "fullName photo wallet_address",
        })
        .sort({ createdAt: -1 })
        .limit(12)
        .exec();

      if (token) {
        const uid = verifyAccessToken(token)?.id;

        if (!uid) {
          return next(new ApiError(403, "Access token không hợp lệ."));
        }

        const user = await userModel
          .findById(uid)
          .populate({ path: "purchases" })
          .select("-username -password -sounds");

        const recentSounds = await historyModel
          .find({ user: uid })
          .populate("sound")
          .populate("playlist")
          .limit(8)
          .sort({ createdAt: -1 });

        const purchases = user.purchases?.map((data) => data.sound.toString());

        modifierNewRelease = newRelease.map((item) => {
          const sound_url = item.main_sound;
          if (item.price > 0 && !purchases.includes(item._id.toString())) {
            item.main_sound = undefined;
          }
          if (uid == item.user._id.toString()) {
            item.main_sound = sound_url;
          }
          return item;
        });

        modifierRecent = recentSounds.map((item) => {
          const sound_url = item.main_sound;
          if (
            item.sound?.price > 0 &&
            !purchases.includes(item.sound._id.toString())
          ) {
            item.sound.main_sound = undefined;
          }
          if (uid == item.sound?.user._id.toString()) {
            item.sound.main_sound = sound_url;
          }
          return item;
        });
      } else {
        modifierNewRelease = newRelease.map((item) => {
          if (item.price > 0) {
            item.main_sound = undefined;
          }
          return item;
        });
      }

      const hotPlaylist = await playlistModel
        .find({ status: "public",  "sounds.0": { $exists: true }  })
        .populate({
          path: "user",
          select: "fullName photo wallet_address",
        })
        .populate({
          path: "sounds",
          select: "photo",
        })
        .sort({ "sounds.length": -1, favourite: -1 })
        .limit(9)
        .exec();

      return res.status(200).json({
        statusCode: 200,
        data: {
          recentSounds: {
            title: "Nghe gần đây",
            items: modifierRecent,
          },
          newSounds: {
            title: "Mới phát hành",
            items: modifierNewRelease,
          },
          hotPlaylist: {
            title: "Album hot",
            items: hotPlaylist,
          },
          playListRecommend: [],
        },
      });
    } catch (error) {
      console.log(error);
      return next(new ApiError(500, "Đã xảy ra lỗi. Vui lòng thử lại sau."));
    }
  },
  search: async (req, res, next) => {
    try {

      const { page = 1, limit = 1000, keyword = "", token } = req.query;

      const skip = (page - 1) * limit;
      const searchCondition = {
        status: true,
        $or: [
          { name: { $regex: keyword, $options: "i" } },
          { slug: { $regex: slug(keyword), $options: "i" } },
          { hashTag: { $regex: keyword, $options: "i" } },
        ],
      };

      const totalSound = await soundModel.countDocuments(searchCondition);
      const sounds = await soundModel
        .find(searchCondition)
        .populate({
          path: "user",
          select:
            "fullName photo wallet_address",
        })
        .collation({ locale: "vi", strength: 2 })
        .skip(skip)
        .limit(limit);


      const authors = await userModel
        .find({
          status: true,
          fullName: { $regex: slug(keyword), $options: "i" },
        })
        .collation({ locale: "vi", strength: 2 })
        .select("fullName photo wallet_address")
        .skip(skip)
        .limit(limit);

      const totalAuthor = await userModel.countDocuments({
        status: true,
        fullName: { $regex: slug(keyword), $options: "i" },
      });
      return res.status(200).json({
        statusCode: 200,
        data: {
          sounds: {
            data: sounds,
            page,
            limit,
            total: totalSound,
          },
          authors: {
            data: authors,
            page,
            limit,
            total: totalAuthor,
          },
        },
      });
    } catch (error) {
      console.log(error);
      return next(new ApiError(500, "Đã xảy ra lỗi. Vui lòng thử lại sau."));
    }
  },
};

export default homeController;
