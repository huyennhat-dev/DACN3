import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    sound: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Sound",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    parent_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
      default: null,
    },
    content: {
      type: String,
      required: true,
    },
    timestamp: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const commentModel = mongoose.model("Comment", commentSchema);

export default commentModel;
