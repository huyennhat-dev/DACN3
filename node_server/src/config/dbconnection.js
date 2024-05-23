import mongoose from "mongoose";
import env from "./env";

const connectDB = async () => {
  try {
    await mongoose.connect(env.MONGODB_URL);
    console.log("Connected to MongoDB", env.MONGODB_URL);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default connectDB