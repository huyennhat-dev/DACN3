import userModel from "~/models/user";

const { default: historyModel } = require("~/models/history");
const { default: performCRUD } = require("~/services/performCRUD");

const historyController = {
  create: async (req, res, next) => {
    try {
      const { type, id } = req.body;

      const findConditions = {
        user: req.user.id,
      };

      if (type == "sound") {
        findConditions.sound = id;
      } else if (type == "playlist") {
        findConditions.playlist = id;
      }
      console.log(findConditions)

      await historyModel.findOneAndDelete(findConditions);
      await performCRUD(historyModel, "create", { ...findConditions });
      return res
        .status(200)
        .json({ statusCode: 200, message: "Thêm thành công" });
    } catch (error) {
      console.log(error);
      return next(new ApiError(500, "Đã xảy ra lỗi. Vui lòng thử lại sau."));
    }
  },
  read: async (req, res, next) => {
    try {
      const uid = req.user.id;

      const histories = await historyModel
        .find({ user: uid })
        .populate("sound")
        .populate("playlist");

      const user = await userModel
        .findById(uid)
        .populate({ path: "purchases" })
        .select("-username -password -sounds");

      const purchases = user.purchases?.map((data) => data.sound.toString());
      const modifierData = histories.map((item) => {
        const sound_url = item.main_sound;
        if (item.price > 0 && !purchases.includes(item._id.toString())) {
          item.main_sound = undefined;
        }
        if (uid == item.user._id.toString()) {
          item.main_sound = sound_url;
        }
        return item;
      });
      return res.status(200).json({ statusCode: 200, data: modifierData });
    } catch (error) {
      console.log(error);
      return next(new ApiError(500, "Đã xảy ra lỗi. Vui lòng thử lại sau."));
    }
  },
  delete: async (req, res, next) => {
    try {
      const id = req.params.id;
      await historyModel.findByIdAndDelete(id);
      return res.status(204).json({ statusCode: 200 });
    } catch (error) {
      console.log(error);
      return next(new ApiError(500, "Đã xảy ra lỗi. Vui lòng thử lại sau."));
    }
  },
  getAll: async (req, res, next) => {
    try {
      const recentSound = await historyModel
        .find({ user: req.user.id })
        .populate("sound")
        .populate("playlist");

      return res.status(200).json({ statusCode: 200, data: recentSound });
    } catch (error) {
      console.log(error);
      return next(new ApiError(500, "Đã xảy ra lỗi. Vui lòng thử lại sau."));
    }
  },
};

export default historyController;
