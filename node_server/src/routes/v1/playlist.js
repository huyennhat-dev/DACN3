import express from "express";
import playlistController from "~/controllers/playlist.controller";
import authMiddleware from "~/middlewares/authMiddleware";
const router = express.Router();

router
  .post("/create", authMiddleware, playlistController.create)
  .put("/update/:id", authMiddleware, playlistController.update)
  .delete("/delete/:id", authMiddleware, playlistController.delete)
  .delete(
    "/delete-sound/:id",
    authMiddleware,
    playlistController.deleteSoundToPlaylist
  )
  .get("/read/:id", playlistController.read)
  .get("/get-playlist-by-other", playlistController.getPlaylistByOther);

export const playlistRouter = router;
