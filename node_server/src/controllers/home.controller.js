import historyModel from "~/models/history";
import soundModel from "~/models/sound";
import userModel from "~/models/user";
import { chillHashtags, healingHashtags, remixHashTags } from "~/utils";
import ApiError from "~/utils/ApiError";
import { verifyAccessToken } from "~/utils/token";

const homeController = {
  home: async (req, res, next) => {
    try {
      const token = req.query.token;
      let modifierNewRelease=[]
      let modifierRecent=[]

      const newRelease = await soundModel
        .find({ status: true })
        .populate({
          path: "user",
          select:
            "-username -password -sounds -createdAt -updatedAt -purchases -playlist",
        })
        .sort({ createdAt: -1 })
        .limit(12);

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
          playlist: [],
        },
      });
    } catch (error) {
      console.log(error);
      return next(new ApiError(500, "Đã xảy ra lỗi. Vui lòng thử lại sau."));
    }
  },
};

export default homeController;
