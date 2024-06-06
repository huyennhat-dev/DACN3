import express from "express";
import commentController from "~/controllers/comment.controller";
import authMiddleware from "~/middlewares/authMiddleware";

const router = express.Router();

router
  .get("/get-all/:id", commentController.getAllBySound)
  .post("/create", authMiddleware, commentController.create)
  .delete("/delete/:id", authMiddleware, commentController.delete);

export const commentRouter = router;
