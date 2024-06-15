import env from "~/config/env";
import { MusicWallet, web3 } from "~/contracts";
import purchaseModel from "~/models/purchase";
import soundModel from "~/models/sound";
import TransactionModel from "~/models/transaction";
import userModel from "~/models/user";
import performCRUD from "~/services/performCRUD";
import ApiError from "~/utils/ApiError";

const transactionController = {
  deposit: async (req, res, next) => {
    try {
      const { txHash } = req.body;
      const receipt = await web3.eth.getTransactionReceipt(txHash);

      if (receipt) {
        const transaction = await web3.eth.getTransaction(txHash);
        await performCRUD(TransactionModel, "create", {
          user: req.user.id,
          transaction_hash: transaction.hash,
          action: "deposit",
          status: "completed",
        });

        return res
          .status(201)
          .json({ statusCode: 201, message: "Nạp tiền thành công!" });
      }
      return;
    } catch (error) {
      if (error.message.includes("Transaction not found")) {
        return next(
          new ApiError(
            401,
            "Giao dịch không được tìm thấy hoặc chưa được khai thác."
          )
        );
      }
      return next(new ApiError(500, "Đã xảy ra lỗi. Vui lòng thử lại sau."));
    }
  },
  balance: async (req, res, next) => {
    try {
      const rs = await MusicWallet.methods
        .getBalance()
        .call({ from: req.user.wallet_address });
      const balance = web3.utils.fromWei(rs, "ether") * env.PERCENTAGE;

      return res.status(200).json({ statusCode: 200, balance });
    } catch (error) {
      return next(new ApiError(500, "Đã xảy ra lỗi. Vui lòng thử lại sau."));
    }
  },
  withDraw: async (req, res, next) => {
    try {
      const { txHash } = req.body;
      const receipt = await web3.eth.getTransactionReceipt(txHash);

      if (receipt) {
        const transaction = await web3.eth.getTransaction(txHash);
        await performCRUD(TransactionModel, "create", {
          user: req.user.id,
          transaction_hash: transaction.hash,
          action: "withdraw",
          status: "completed",
        });

        return res
          .status(201)
          .json({ statusCode: 201, message: "Rút tiền thành công!" });
      }
      return;
    } catch (error) {
      if (error.message.includes("Transaction not found")) {
        return next(
          new ApiError(
            401,
            "Giao dịch không được tìm thấy hoặc chưa được khai thác."
          )
        );
      }
      return next(new ApiError(500, "Đã xảy ra lỗi. Vui lòng thử lại sau."));
    }
  },
  buySound: async (req, res, next) => {
    try {
      const uid = req.user.id;
      const { soundId } = req.body;

      const wallet_balance = await MusicWallet.methods
        .getBalance()
        .call({ from: req.user.wallet_address });
      const balance =
        web3.utils.fromWei(wallet_balance, "ether") * env.PERCENTAGE;

      const sound = await soundModel.findById(soundId).populate({
        path: "user",
        select:
          "-username -password -follower -following -playlist -sounds -purchases",
      });

      if (balance < sound.price) {
        return next(new ApiError(401, "Bạn không đủ tiền trong ví!"));
      }

      const user = await userModel
        .findById(uid)
        .populate({ path: "purchases" })
        .select("-username -password -playlist -sounds -follower -following");

      const purchasesIdList = [];
      user.purchases.map((data) => {
        purchasesIdList.push(data.sound.toString());
      });
      if (purchasesIdList.includes(soundId)) {
        return next(new ApiError(401, "Bạn đã mua sound này rồi!"));
      }

      if (uid == sound.user._id) {
        return next(new ApiError(401, "Bạn không thể mua nhạc của chính bạn!"));
      }

      const rs = await MusicWallet.methods
        .transfer(
          sound.user.wallet_address,
          web3.utils.toWei(sound.price / env.PERCENTAGE, "ether")
        )
        .send({
          from: req.user.wallet_address,
        });

      if (!rs.transactionHash) {
        return next(new ApiError(401, "Có lỗi xảy ra, giao dịch thất bại!"));
      }

      const purchase = await performCRUD(purchaseModel, "create", {
        buyer: uid,
        sound: soundId,
        amount: sound.price,
      });

      await performCRUD(userModel, "update", {
        id: uid,
        $push: {
          purchases: purchase._id,
        },
      });

      await performCRUD(TransactionModel, "create", {
        user: uid,
        transaction_hash: rs.transactionHash,
        action: "transaction",
        status: "completed",
      });

      return res
        .status(200)
        .json({ statusCode: 200, message: "Giao dịch thành công!" });
    } catch (error) {
      console.log(error);
      return next(new ApiError(500, "Đã xảy ra lỗi. Vui lòng thử lại sau."));
    }
  },
  getTransaction: async (req, res, next) => {
    try {
      const uid = req.user.id;
      const { keyword = "deposit", page = 1, limit = 1000 } = req.query;
      const startIndex = (page - 1) * limit;

      const transactions = await TransactionModel.find({
        user: uid,
        action: keyword,
      })
        .skip(startIndex)
        .limit(limit)
        .sort({ createdAt: -1 });

      return res.status(201).json({ statusCode: 201, data: transactions });
    } catch (error) {
      console.log(error);
      return next(new ApiError(500, "Đã xảy ra lỗi. Vui lòng thử lại sau."));
    }
  },
};

export default transactionController;
