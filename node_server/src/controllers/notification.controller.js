import notificationModel from "~/models/notification";
import performCRUD from "~/services/performCRUD";
import ApiError from "~/utils/ApiError";

const notificationController = {
  read: async (req, res, next) => {
    try {
      const noti = await notificationModel
        .findById(req.params.id)
        .populate({ path: "user", select: "fullName photo wallet_address" });

      return res.status(200).json({
        statusCode: 200,
        data: noti,
      });
    } catch (error) {
      console.log(error);
      return next(new ApiError(500, "Đã xảy ra lỗi. Vui lòng thử lại sau."));
    }
  },

  readAll: async (req, res, next) => {
    try {
      const { page = 1, limit = 1000 } = req.query;
      const startIndex = (page - 1) * limit;
      const noti = await notificationModel
        .find({ user: req.user.id })
        .populate({ path: "user", select: "fullName photo wallet_address" })
        .skip(startIndex)
        .limit(limit)
        .sort({ createdAt: -1 })
        .exec();

      return res.status(200).json({
        statusCode: 200,
        data: noti,
      });
    } catch (error) {
      console.log(error);
      return next(new ApiError(500, "Đã xảy ra lỗi. Vui lòng thử lại sau."));
    }
  },
  create: async (req, res, next) => {
    try {
      const { user, content } = req.body;
      const notification = await notificationModel.create({
        user,
        content,
      });
      return res.status(200).json({
        statusCode: 200,
        message: "Thêm thành công",
        data: notification,
      });
    } catch (error) {
      console.log(error);
      return next(new ApiError(500, "Đã xảy ra lỗi. Vui lòng thử lại sau."));
    }
  },
  update: async (req, res, next) => {
    try {
      const notifyId = req.params.id;
      await performCRUD(notificationModel, "update", {
        id: notifyId,
        active: true,
      });

      return res.status(200).json({
        statusCode: 200,
        message: "Cập nhật thành công",
      });
    } catch (error) {
      console.log(error);
      return next(new ApiError(500, "Đã xảy ra lỗi. Vui lòng thử lại sau."));
    }
  },
};

export default notificationController;
