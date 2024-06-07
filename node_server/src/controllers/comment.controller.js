import { populate } from "dotenv";
import commentModel from "~/models/comment";
import userModel from "~/models/user";

const { default: performCRUD } = require("~/services/performCRUD");

const commentController = {
  create: async (req, res, next) => {
    try {
      const uid = req.user.id;
      const { sound, parent, content, timestamp } = req.body;
      const comment = await performCRUD(commentModel, "create", {
        user: uid,
        sound,
        parent: parent ? parent : undefined,
        content,
        timestamp,
      });
      return res
        .status(200)
        .json({ statusCode: 200, message: "Thêm thành công", data: comment });
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
      const comments = await commentModel
        .findBySound(req.params.id)
        .populate({ path: "user", select: "fullName photo wallet_address" })
        .populate({
          path: "parent",
          select:"sound user",
          populate: { path: "user", select: "fullName photo wallet_address" },
        })
        .skip(startIndex)
        .limit(limit)
        .sort({ createdAt: -1 })
        .lean();

      const totalComments = await commentModel.countDocuments({
        sound: req.params.id,
      });

      // Xây dựng cấu trúc cây
      const commentMap = {};
      comments.forEach((comment) => {
        comment.replies = [];
        commentMap[comment._id] = comment;
      });

      const rootComments = [];
      comments.forEach((comment) => {
        if (comment.parent?._id) {
          if (commentMap[comment.parent._id]) {
            commentMap[comment.parent._id].replies.push(comment);
          }
        } else {
          rootComments.push(comment);
        }
      });

      return res.status(200).json({
        statusCode: 200,
        data: rootComments,
        page: page,
        limit: limit,
        total: totalComments,
      });
    } catch (error) {
      console.log(error);
      return next(new ApiError(500, "Đã xảy ra lỗi. Vui lòng thử lại sau."));
    }
  },
};

export default commentController;
