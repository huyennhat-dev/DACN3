import express from "express";
import notificationController from "~/controllers/notification.controller";

const router = express.Router();

router
  .post("/create", notificationController.create)
  .put("/update/:id", notificationController.update);

export const notificationRouter = router;
