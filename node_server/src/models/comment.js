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
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
      default: null,
    },
    content: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 255,
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


commentSchema.statics.findBySound = function (soundId) {
  return this.find({ sound: soundId });
};

const commentModel = mongoose.model("Comment", commentSchema);

export default commentModel;
