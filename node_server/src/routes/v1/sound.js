import express from "express";
import path from "path";
import soundController from "~/controllers/sound.controller";
import authMiddleware from "~/middlewares/authMiddleware";

const router = express.Router();

router
  .post("/create", authMiddleware, soundController.create)
  .put("/update/:id", authMiddleware, soundController.update)
  .delete("/delete/:id",authMiddleware, soundController.delete)
  .get("/read/:id", soundController.read)
  .get("/search", soundController.search)
  .get("/get-sounds-by-buyer", authMiddleware, soundController.getSoundsByBuyer)
  .get("/get-sounds-by-other", soundController.getSoundsByOther)

export const soundRouter = router;
