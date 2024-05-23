import soundModel from "~/models/sound";
import userModel from "~/models/user";
import { chillHashtags, healingHashtags, remixHashTags } from "~/utils";
import ApiError from "~/utils/ApiError";
import { verifyAccessToken } from "~/utils/token";

const homeController = {
  home: async (req, res, next) => {
    try {
      const token = req.query.token;
      let modifierNewRelease;
      let modifierRemixPlayList;
      let modifierChillPlayList;
      let modifierHotPlayList;
      let modifierHealPlayList;

      const newRelease = await soundModel
        .find({ status: true })
        .populate({
          path: "user",
          select:
            "-username -password -sounds -createdAt -updatedAt -purchases -playlist",
        })
        .sort({ createdAt: -1 })
        .limit(12);

      const remixPlayList = await soundModel
        .find({ status: true, hashTag: { $in: remixHashTags } })
        .populate({
          path: "user",
          select:
            "-username -password -sounds -createdAt -updatedAt -purchases -playlist",
        })
        .sort({ listens: -1 })
        .limit(4);

      const chillPlayList = await soundModel
        .find({ status: true, hashTag: { $in: chillHashtags } })
        .populate({
          path: "user",
          select:
            "-username -password -sounds -createdAt -updatedAt -purchases -playlist",
        })
        .sort({ listens: -1 })
        .limit(4);

      const hotPlayList = await soundModel
        .find({ status: true })
        .populate({
          path: "user",
          select:
            "-username -password -sounds -createdAt -updatedAt -purchases -playlist",
        })
        .sort({ listens: -1 })
        .limit(4);

      const healPlayList = await soundModel
        .find({ status: true, hashTag: { $in: healingHashtags } })
        .populate({
          path: "user",
          select:
            "-username -password -sounds -createdAt -updatedAt -purchases -playlist",
        })
        .sort({ listens: -1 })
        .limit(4);

      if (token) {
        const uid = verifyAccessToken(token)?.id;

        if (!uid) {
          return next(new ApiError(403, "Access token không hợp lệ."));
        }

        const user = await userModel
          .findById(uid)
          .populate({ path: "purchases" })
          .select("-username -password -sounds");

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

        modifierRemixPlayList = remixPlayList.map((item) => {
          if (item.price > 0 && !purchases.includes(item._id)) {
            item.main_sound = undefined;
          }
          return item;
        });

        modifierChillPlayList = chillPlayList.map((item) => {
          if (item.price > 0 && !purchases.includes(item._id)) {
            item.main_sound = undefined;
          }
          return item;
        });
        modifierHotPlayList = hotPlayList.map((item) => {
          if (item.price > 0 && !purchases.includes(item._id)) {
            item.main_sound = undefined;
          }
          return item;
        });
        modifierHealPlayList = healPlayList.map((item) => {
          if (item.price > 0 && !purchases.includes(item._id)) {
            item.main_sound = undefined;
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
        modifierRemixPlayList = remixPlayList.map((item) => {
          if (item.price > 0) {
            item.main_sound = undefined;
          }
          return item;
        });

        modifierChillPlayList = chillPlayList.map((item) => {
          if (item.price > 0) {
            item.main_sound = undefined;
          }
          return item;
        });
        modifierHotPlayList = hotPlayList.map((item) => {
          if (item.price > 0) {
            item.main_sound = undefined;
          }
          return item;
        });

        modifierHealPlayList = healPlayList.map((item) => {
          if (item.price > 0) {
            item.main_sound = undefined;
          }
          return item;
        });
      }

      return res.status(200).json({
        statusCode: 200,
        data: {
          playlist: [
            {
              sectionType: "playlist",
              title: "Mới phát hành",
              items: modifierNewRelease,
            },
            {
              title: "Nhạc Remix cực bốc",
              sectionType: "playlist",
              items: modifierRemixPlayList,
            },
            {
              title: "Chill",
              sectionType: "playlist",
              items: modifierChillPlayList,
            },
            {
              title: "Mỗi ngày một niềm vui",
              sectionType: "playlist",
              items: modifierHealPlayList,
            },
            {
              sectionType: "playlist",
              title: "Album Hot",
              items: modifierHotPlayList,
            },
          ],
        },
      });
    } catch (error) {
      console.log(error);
      return next(new ApiError(500, "Đã xảy ra lỗi. Vui lòng thử lại sau."));
    }
  },
};

export default homeController;
