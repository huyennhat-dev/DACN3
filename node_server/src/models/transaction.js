import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    transaction_hash: {
      type: String,
      required: true,
      unique: true,
    },
    action:{
      type: String,
      enum: ["deposit", "buySound", "withdraw"],
      default: "deposit",
    },
    status: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const TransactionModel = mongoose.model("Transaction", transactionSchema);
export default TransactionModel