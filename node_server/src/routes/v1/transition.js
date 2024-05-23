import express from "express";
import { MusicWallet, web3 } from "~/contracts";
import transactionController from "~/controllers/transaction.controller";
import authMiddleware from "~/middlewares/authMiddleware";

const router = express.Router();

router
  .post("/deposit", authMiddleware, transactionController.deposit)
  .get("/balance", authMiddleware, transactionController.balance)
  .post("/buy-sound", authMiddleware, transactionController.buySound);

// API để transfer từ một địa chỉ sang địa chỉ khác
router.post("/transfer", async (req, res) => {
  const { from, to, value } = req.body;
  try {
    const accounts = await web3.eth.getAccounts();
    await MusicWallet.methods
      .transfer(to, web3.utils.toWei(value, "ether"))
      .send({
        from: from || accounts[0],
      });
    res.send("Transfer successful");
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

export const transitionRouter = router;
