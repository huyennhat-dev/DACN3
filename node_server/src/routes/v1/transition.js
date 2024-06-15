import express from "express";
import { MusicWallet, web3 } from "~/contracts";
import transactionController from "~/controllers/transaction.controller";
import authMiddleware from "~/middlewares/authMiddleware";

const router = express.Router();

router
  .post("/deposit", authMiddleware, transactionController.deposit)
  .post("/withdraw", authMiddleware, transactionController.withDraw)
  .get("/balance", authMiddleware, transactionController.balance)
  .post("/buy-sound", authMiddleware, transactionController.buySound)
  .get("/get-all", authMiddleware, transactionController.getTransaction)




export const transitionRouter = router;
