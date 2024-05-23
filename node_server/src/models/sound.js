import mongoose from "mongoose";

const soundSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    preview_sound: String,
    main_sound: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    lyric: String,
    price: {
      type: Number,
      default: 0,
    },
    listens: {
      type: Number,
      min: 0,
      default: 0,
    },
    hashTag: {
      type: [String],
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const soundModel = mongoose.model("Sound", soundSchema);

export default soundModel;
