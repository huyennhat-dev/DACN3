import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema(
  {
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    sound: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sound",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const purchaseModel = mongoose.model("Purchase", purchaseSchema);
export default purchaseModel
