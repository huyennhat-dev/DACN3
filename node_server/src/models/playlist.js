import mongoose from "mongoose";

const playlistSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      require: true,
      min: 3,
      max: 100,
    },
    photo: {
      type: String,
    },
    sounds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sound",
        required: true,
      },
    ],
    favourite: { type: Number, default: 0},
    status: {
      type: String,
      enum: ["private", "public"],
      default: "private",
    },
  },
  {
    timestamps: true,
  }
);

const playlistModel = mongoose.model("Playlist", playlistSchema);

export default playlistModel;
