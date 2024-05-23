import mongoose from "mongoose";

const historySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    sound: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sound",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const historyModel = mongoose.model("History", historySchema);

export default historyModel;
