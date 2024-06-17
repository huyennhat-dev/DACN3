import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 6,
      max: 40,
    },
    password: {
      type: String,
      required: true,
      min: 8,
    },
    fullName: {
      type: String,
      required: true,
      min: 4,
      max: 40,
    },
    photo: String,
    description: String,
    wallet_address: {
      type:String,
      unique: true,
    },
    follower: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    sounds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sound",
        required: true,
      },
    ],
    purchases: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Purchase",
        required: true,
      },
    ],
    playlist: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Playlist",
        required: true,
      },
    ],
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const userModel = mongoose.model("User", userSchema);

export default userModel;
