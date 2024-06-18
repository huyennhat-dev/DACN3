import express from "express";
import notificationController from "~/controllers/notification.controller";
import authMiddleware from "~/middlewares/authMiddleware";

const router = express.Router();

router
  .post("/create", authMiddleware, notificationController.create)
  .put("/update/:id", authMiddleware, notificationController.update)
  .get("/read/:id", authMiddleware, notificationController.read)
  .get("/read-all", authMiddleware, notificationController.readAll);

export const notificationRouter = router;
