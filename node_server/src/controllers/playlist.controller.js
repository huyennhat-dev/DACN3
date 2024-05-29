import fs from "fs";

import playlistModel from "~/models/playlist";
import userModel from "~/models/user";
import deleteFile from "~/services/deleteFile";
import performCRUD from "~/services/performCRUD";
import { fileNameGeneral, typeFile } from "~/utils";
import ApiError from "~/utils/ApiError";
import { verifyAccessToken } from "~/utils/token";

const playlistController = {
  create: async (req, res, next) => {
    try {
      const uid = req.user.id;
      const { title, photo, status = "private" } = req.body;

      if (!title || title.length < 3 || title.length > 100) {
        return next(new ApiError(400, "Thông tin không hợp lệ!"));
      }

      const data = { user: uid, title, status };

      if (photo) {
        const fileName = Date.now();
        const photoPath =
          "uploads/images/" + fileNameGeneral(fileName, typeFile(photo));
        fs.writeFileSync(photoPath, photo.split(",")[1], "base64");
        data.photo = photoPath;
      }

      const newPlaylist = await performCRUD(playlistModel, "create", data);
      await performCRUD(userModel, "update", {
        id: uid,
        $push: { playlist: newPlaylist._id },
      });
      return res
        .status(201)
        .json({ statusCode: 201, message: "Tạo playlist thành công!" });
    } catch (error) {
      console.log(error);
      return next(new ApiError(500, "Đã xảy ra lỗi. Vui lòng thử lại sau."));
    }
  },
  read: async (req, res, next) => {
    try {
      let uid;
      const playlistId = req.params.id;
      const token = req.query.token;

      let modifierSound;

      let playlistData = await playlistModel.findById(playlistId).populate([
        {
          path: "user",
          select:
            "-username -password -sounds -purchases -playlist -createdAt -updatedAt",
        },
        {
          path: "sounds",
          select:
            "-username -password -sounds -purchases -playlist -createdAt -updatedAt",
        },
      ]);

      if (!playlistData) {
        return next(new ApiError(404, "Không tìm thấy playlist!"));
      }

      if (token) {
        uid = verifyAccessToken(token)?.id;

        if (!uid) {
          return next(new ApiError(403, "Access token không hợp lệ."));
        }
        const user = await userModel
          .findById(uid)
          .select("-username -password -sounds");

        const purchases = user.purchases;

        modifierSound = playlistData.sounds.map((item) => {
          if (item.price > 0 && !purchases.includes(item._id)) {
            item.main_sound = undefined;
          }
          return item;
        });
      } else {
        modifierSound = playlistData.sounds.map((item) => {
          if (item.price > 0) {
            item.main_sound = undefined;
          }
          return item;
        });
      }

      playlistData.sounds = modifierSound;

      if (playlistData.status == "private") {
        if (uid) {
          if (uid != playlistData.user._id) playlistData = {};
        } else {
          playlistData = {};
        }
      }

      return res.status(200).json({ statusCode: 200, data: playlistData });
    } catch (error) {
      console.log(error);
      return next(new ApiError(500, "Đã xảy ra lỗi. Vui lòng thử lại sau."));
    }
  },
  update: async (req, res, next) => {
    try {
      let playlistData;
      const uid = req.user.id;
      const playlistId = req.params.id;

      const { title, photo, status, sounds, favouriteValue } = req.body;

      if (title && (title.length < 3 || title.length > 100)) {
        return next(new ApiError(400, "Thông tin không hợp lệ!"));
      }

      const updateData = { title, status };

      const playlist = await playlistModel.find({ user: uid, _id: playlistId });
      if (playlist) {
        if (photo && photo.split(":")[0] == "data") {
          playlistData = await playlistModel.findById(playlistId);

          if (!playlistData) {
            return next(new ApiError(404, "Không tìm thấy playlist!"));
          }

          const fileName = Date.now();
          const photoPath =
            "uploads/images/" + fileNameGeneral(fileName, typeFile(photo));
          fs.writeFileSync(photoPath, photo.split(",")[1], "base64");
          updateData.photo = photoPath;

          if (playlistData.photo) deleteFile(playlistData.photo);
        }
        await performCRUD(playlistModel, "update", {
          id: playlistId,
          ...updateData,
        });

        if (sounds && sounds.length > 0) {
          const existingPlaylist = await playlistModel.findById(playlistId);
          const existingSounds = existingPlaylist
            ? existingPlaylist.sounds
            : [];

          const newSounds = sounds.filter(
            (sound) => !existingSounds.includes(sound)
          );

          if (newSounds.length > 0) {
            await performCRUD(playlistModel, "update", {
              id: playlistId,
              $push: { sounds: { $each: newSounds } },
            });
          }
        }
      }

      if (favouriteValue) {
        await performCRUD(playlistModel, "update", {
          id: playlistId,
          $inc: { favourite: favouriteValue },
        });
      }

      return res
        .status(200)
        .json({ statusCode: 200, message: "Cập nhật thành công!" });
    } catch (error) {
      console.log(error);
      return next(new ApiError(500, "Đã xảy ra lỗi. Vui lòng thử lại sau."));
    }
  },
  delete: async (req, res, next) => {
    try {
      const playlistId = req.params.id;

      const playlistData = await playlistModel.findById(playlistId);
      if (!playlistData) {
        return next(new ApiError(404, "Không tìm thấy playlist!"));
      }

      if (playlistData.photo) deleteFile(playlistData.photo);
      await performCRUD(playlistModel, "delete", { id: playlistId });
      await performCRUD(userModel, "update", {
        id: req.user.id,
        $pull: { playlist: playlistId },
      });

      return res
        .status(204)
        .json({ statusCode: 204, message: "Xóa thành công!" });
    } catch (error) {
      console.log(error);
      return next(new ApiError(500, "Đã xảy ra lỗi. Vui lòng thử lại sau."));
    }
  },
  getPlaylistByOther: async (req, res, next) => {
    try {
      let modifiedPlaylistData;
      const { token, keyword, limit = 1000, page = 1 } = req.query;
      const startIndex = (page - 1) * limit;

      const playlist = await playlistModel
        .find({ user: keyword })
        .populate({
          path: "user",
          select:
            "-username -password -createdAt -updatedAt -sounds -purchases",
        })
        .skip(startIndex)
        .limit(limit)
        .sort({ createdAt: -1 });

      const totalResults = await playlistModel.countDocuments({
        user: keyword,
      });

      if (token) {
        const uid = verifyAccessToken(token)?.id;
        if (uid) modifiedPlaylistData = playlist;
      } else {
        modifiedPlaylistData = playlist.filter(
          (item) => item.status != "private"
        );
      }

      return res.status(200).json({
        statusCode: 200,
        data: modifiedPlaylistData,
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

export default playlistController;
