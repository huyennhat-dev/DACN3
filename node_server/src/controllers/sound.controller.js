import fs from "fs";
import cutSound from "~/services/cutSound";
import ApiError from "~/utils/ApiError";
import { extractFileName, fileNameGeneral, typeFile } from "~/utils";
import soundModel from "~/models/sound";
import slug from "slug";
import performCRUD from "~/services/performCRUD";
import path from "path";
import readLyric from "~/services/lyric";
import deleteFile from "~/services/deleteFile";
import userModel from "~/models/user";
import { verifyAccessToken } from "~/utils/token";
import purchaseModel from "~/models/purchase";
import NodeID3 from "node-id3";
import playlistModel from "~/models/playlist";
import historyModel from "~/models/history";

const soundController = {
  create: async (req, res, next) => {
    try {
      const uid = req.user.id;
      const { name, sound, lyric, photo, price = 0, hashTag = [] } = req.body;
      if (!name || !sound || !photo) {
        return next(new ApiError(400, "Vui lòng điền đầy đủ thông tin."));
      }
      const fileName = Date.now();
      const soundName = fileNameGeneral(fileName, typeFile(sound));
      let lyricPath;
      const mainSoundPath = "uploads/sounds/main/" + soundName;
      const photoPath =
        "uploads/images/" + fileNameGeneral(fileName, typeFile(photo));

      fs.writeFileSync(
        path.join(__dirname, "../public/" + mainSoundPath),
        sound.split(",")[1],
        "base64"
      );

      fs.writeFileSync(
        path.join(__dirname, "../public/" + photoPath),
        photo.split(",")[1],
        "base64"
      );

      const buffer = Buffer.from(sound, "base64");
      const tags = NodeID3.read(buffer);

      tags.title = name;
      tags.artist = req.user.fullName;
      tags.album = null;
      tags.comment = name + "-" + req.user.fullName;
      tags.year = new Date().getFullYear().toString();
      tags.image = path.join(__dirname, "../public/" + photoPath);

      NodeID3.write(tags, path.join(__dirname, "../public/" + mainSoundPath));

      if (lyric) {
        lyricPath =
          "uploads/lyrics/" + fileNameGeneral(fileName, typeFile(lyric));
        fs.writeFileSync(
          path.join(__dirname, "../public/" + lyricPath),
          lyric.split(",")[1],
          "base64"
        );
      }

      let shortSoundPath;

      if (price > 0) {
        shortSoundPath = "uploads/sounds/short/" + soundName;
        cutSound(
          path.join(__dirname, "../public/" + mainSoundPath),
          path.join(__dirname, "../public/" + shortSoundPath),
          20
        );
      }

      const newSound = await performCRUD(soundModel, "create", {
        name,
        slug: slug(name),
        user: uid,
        preview_sound: shortSoundPath,
        main_sound: mainSoundPath,
        lyric: lyricPath,
        photo: photoPath,
        price,
        hashTag,
      });

      await performCRUD(userModel, "update", {
        id: uid,
        $push: { sounds: newSound._id },
      });

      return res
        .status(201)
        .json({ statusCode: 201, message: "Thêm sound thành công!" });
    } catch (error) {
      console.log(error);
      return next(new ApiError(500, "Đã xảy ra lỗi. Vui lòng thử lại sau."));
    }
  },
  update: async (req, res, next) => {
    try {
      const soundId = req.params.id;

      const { name, sound, lyric, photo, price, hashTag } = req.body;

      let updateData = {
        name,
        price,
        hashTag,
        photo,
        lyric,
      };

      if (name) updateData.slug = slug(name);

      let soundData;

      if (sound || lyric || photo || price)
        soundData = await soundModel.findById(soundId);

      const fileName = Date.now();

      //khi user chỉ muốn chuyển từ free => mất phí
      //lấy main sound ra và cut tạo preview sound
      if (price > 0 && soundData.price == 0 && !sound) {
        const mainSoundPath = soundData.main_sound;
        const shortSoundPath =
          "uploads/sounds/short/" + extractFileName(mainSoundPath);

        cutSound(
          path.join(__dirname, "../public/" + mainSoundPath),
          path.join(__dirname, "../public/" + shortSoundPath),
          20
        );
        updateData.preview_sound = shortSoundPath;
      }

      //khi user muốn thay đổi sound
      if (sound && sound.split(":")[0] == "data") {
        const soundName = fileNameGeneral(fileName, typeFile(sound));

        const mainSoundPath = "uploads/sounds/main/" + soundName;

        fs.writeFileSync(
          path.join(__dirname, "../public/" + mainSoundPath),
          sound.split(",")[1],
          "base64"
        );

        if (price > 0) {
          const shortSoundPath = "uploads/sounds/short/" + soundName;
          cutSound(
            path.join(__dirname, "../public/" + mainSoundPath),
            path.join(__dirname, "../public/" + shortSoundPath),
            20
          );
          updateData.preview_sound = shortSoundPath;
        }

        updateData.main_sound = mainSoundPath;

        const oldMainSoundPath = soundData.main_sound;
        deleteFile(path.join(__dirname, "../public/" + oldMainSoundPath));

        if (soundData.preview_sound) {
          const oldPreviewSoundPath = soundData.preview_sound;
          deleteFile(path.join(__dirname, "../public/" + oldPreviewSoundPath));
        }
      }

      if (lyric && lyric.split(":")[0] == "data") {
        const lyricPath =
          "uploads/lyrics/" + fileNameGeneral(fileName, typeFile(lyric));
        fs.writeFileSync(
          path.join(__dirname, "../public/" + lyricPath),
          sound.split(",")[1],
          "base64"
        );

        const oldLyricPath = soundData.lyric;
        deleteFile(path.join(__dirname, "../public/" + oldLyricPath));
      }

      if (photo && photo.split(":")[0] == "data") {
        const photoPath =
          "uploads/images/" + fileNameGeneral(fileName, typeFile(lyric));
        fs.writeFileSync(
          path.join(__dirname, "../public/" + photoPath),
          sound.split(",")[1],
          "base64"
        );

        const oldPhotoPath = soundData.photo;
        deleteFile(path.join(__dirname, "../public/" + photoPath));
      }

      await performCRUD(soundModel, "update", {
        id: soundId,
        ...updateData,
      });

      return res
        .status(200)
        .json({ statusCode: 200, message: "Cập nhật thành công!" });
    } catch (error) {
      console.log(error);
      return next(new ApiError(500, "Đã xảy ra lỗi. Vui lòng thử lại sau."));
    }
  },
  read: async (req, res, next) => {
    try {
      const soundId = req.params.id;
      const token = req.query.token;

      const sound = await soundModel.findById(soundId).populate({
        path: "user",
        select: "fullName photo wallet_address",
      });
      if (!sound) return next(new ApiError(400, "Không tìm thấy dữ liệu!"));

      let lyricData;
      let modifiedSoundData;

      if (sound.lyric) {
        const filePath = path.resolve(__dirname, `../public/${sound.lyric}`);
        lyricData = await readLyric(filePath);
      }
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

        let sound_url = sound.main_sound;

        if (sound.price > 0 && !purchases.includes(sound._id.toString())) {
          sound_url = undefined;
        }
        if (uid == sound.user._id.toString()) {
          sound_url = sound.main_sound;
        }
        modifiedSoundData = {
          ...sound.toObject(),
          lyric: lyricData,
          main_sound: sound_url,
        };
      } else {
        modifiedSoundData = {
          ...sound.toObject(),
          lyric: lyricData,
          main_sound: sound.price > 0 ? undefined : sound.main_sound,
        };
      }

      await performCRUD(soundModel, "update", {
        id: soundId,
        $inc: { listens: 1 },
      });

      return res.status(200).json({ statusCode: 200, data: modifiedSoundData });
    } catch (error) {
      console.log(error);
      return next(new ApiError(500, "Đã xảy ra lỗi. Vui lòng thử lại sau."));
    }
  },

  delete: async (req, res, next) => {
    try {
      const uid = req.user.id;
      const soundId = req.params.id;

      const soundData = await soundModel.findById(soundId);
      const checkBuyer = await purchaseModel.findOne({ sound: soundId });

      if (checkBuyer) {
        return next(
          new ApiError(401, `${soundData.name} đã có người mua, không thể xóa!`)
        );
      }

      await performCRUD(soundModel, "delete", { id: soundId });
      await performCRUD(userModel, "update", {
        id: uid,
        $pull: { sounds: soundId },
      });

      await playlistModel.updateMany(
        { sounds: soundId },
        { $pull: { sounds: soundId } }
      );

      await playlistModel.deleteMany({ sound: soundId });
      await historyModel.deleteMany({ sound: soundId });

      const oldPhotoPath = soundData.photo;
      const oldLyricPath = soundData.lyric;
      const oldMainSoundPath = soundData.main_sound;
      deleteFile(path.join(__dirname, "../public/" + oldPhotoPath));
      deleteFile(path.join(__dirname, "../public/" + oldLyricPath));
      deleteFile(path.join(__dirname, "../public/" + oldMainSoundPath));

      if (soundData.preview_sound) {
        const oldPreviewSoundPath = soundData.preview_sound;
        deleteFile(oldPreviewSoundPath);
      }

      return res
        .status(204)
        .json({ statusCode: 204, message: "Xóa thành công!" });
    } catch (error) {
      console.log(error);
      return next(new ApiError(500, "Đã xảy ra lỗi. Vui lòng thử lại sau."));
    }
  },
  getSoundsByOther: async (req, res, next) => {
    try {
      let modifiedSoundData;
      const { token, keyword, limit = 1000, page = 1 } = req.query;
      const startIndex = (page - 1) * limit;
      const sounds = await soundModel
        .find({ user: keyword, status: true })
        .populate({
          path: "user",
          select:
            "-username -password -createdAt -updatedAt -sounds -purchases",
        })
        .skip(startIndex)
        .limit(limit)
        .sort({ createdAt: -1 });

      const totalResults = await soundModel.countDocuments({
        user: keyword,
        status: true,
      });

      if (token) {
        const uid = verifyAccessToken(token)?.id;

        if (!uid) {
          return next(new ApiError(403, "Access token không hợp lệ."));
        }

        const user = await userModel
          .findById(uid)
          .populate({ path: "purchases" })
          .select("-username -password -sounds -follower -following");

        const purchases = user.purchases?.map((data) => data.sound.toString());

        modifiedSoundData = sounds.map((item) => {
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
        modifiedSoundData = sounds.map((item) => {
          if (item.price > 0) {
            item.main_sound = undefined;
          }
          return item;
        });
      }

      return res.status(200).json({
        statusCode: 200,
        data: modifiedSoundData,
        page,
        limit,
        total: totalResults,
      });
    } catch (error) {
      console.log(error);
      return next(new ApiError(500, "Đã xảy ra lỗi. Vui lòng thử lại sau."));
    }
  },
  getSoundsByBuyer: async (req, res, next) => {
    try {
      const uid = req.user.id;
      const { limit = 1000, page = 1 } = req.query;
      const startIndex = (page - 1) * limit;
      const sounds = await purchaseModel
        .find({ buyer: uid })
        .populate("sound")
        .skip(startIndex)
        .limit(limit)
        .sort({ createdAt: -1 });

      const totalResults = await purchaseModel.countDocuments({
        buyer: uid,
      });

      const modifierData = sounds.map((data) => {
        return data.sound;
      });

      return res.status(200).json({
        statusCode: 200,
        data: modifierData,
        page,
        limit,
        total: totalResults,
      });
    } catch (error) {
      console.log(error);
      return next(new ApiError(500, "Đã xảy ra lỗi. Vui lòng thử lại sau."));
    }
  },
};

export default soundController;
