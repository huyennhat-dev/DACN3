import commentModel from "~/models/comment";
import userModel from "~/models/user";

const { default: performCRUD } = require("~/services/performCRUD");

const commentController = {
  create: async (req, res, next) => {
    try {
      const uid = req.user.id;
      const { soundId, parentId, content, timestamp } = req.body;
      await performCRUD(commentModel, "create", {
        user: uid,
        sound: soundId,
        parentId,
        content,
        timestamp,
      });
      return res
        .status(200)
        .json({ statusCode: 200, message: "Thêm thành công" });
    } catch (error) {
      console.log(error);
      return next(new ApiError(500, "Đã xảy ra lỗi. Vui lòng thử lại sau."));
    }
  },
  delete: async (req, res, next) => {
    try {
      const id = req.params.id;
      await commentModel.findByIdAndDelete(id);
      return res.status(204).json({ statusCode: 200 });
    } catch (error) {
      console.log(error);
      return next(new ApiError(500, "Đã xảy ra lỗi. Vui lòng thử lại sau."));
    }
  },
  getAllBySound: async (req, res, next) => {
    try {
      const { page = 1, limit = 1000 } = req.query;
      const startIndex = (page - 1) * limit;
      const recentSound = await commentModel
        .find({ sound: req.params.id })
        .populate("user")
        .skip(startIndex)
        .limit(limit)
        .sort({ createdAt: -1 });

      return res.status(200).json({ statusCode: 200, data: recentSound });
    } catch (error) {
      console.log(error);
      return next(new ApiError(500, "Đã xảy ra lỗi. Vui lòng thử lại sau."));
    }
  },
};

export default commentController;
