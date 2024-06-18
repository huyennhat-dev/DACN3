import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    message: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const notificationModel = mongoose.model("Notification", notificationSchema);

export default notificationModel;
