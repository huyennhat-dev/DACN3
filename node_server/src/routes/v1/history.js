import express from "express";
import historyController from "~/controllers/history.controller";
import authMiddleware from "~/middlewares/authMiddleware";

const router = express.Router();

router
  .get("/", authMiddleware, historyController.getAll)
  .post("/create", authMiddleware, historyController.create)
  .delete("/delete/:id", authMiddleware, historyController.delete);

export const historyRouter = router;
