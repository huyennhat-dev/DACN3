import notificationModel from "~/models/notification";
import performCRUD from "~/services/performCRUD";
import ApiError from "~/utils/ApiError";

const notificationController = {
  create: async (req, res, next) => {
    try {
      const { user, message } = req.body;
      const notification = await notificationModel.create({
        user,
        message,
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
