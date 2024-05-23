import express from "express";
import playlistController from "~/controllers/playlist.controller";
import authMiddleware from "~/middlewares/authMiddleware";
const router = express.Router();

router
  .post("/create", authMiddleware, playlistController.create)
  .put("/update/:id", authMiddleware, playlistController.update)
  .delete("/delete/:id", authMiddleware, playlistController.delete)
  .get("/read/:id", playlistController.read)

export const playlistRouter = router;
