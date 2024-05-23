import express from "express";
import userController from "~/controllers/user.controller";
import authMiddleware from "~/middlewares/authMiddleware";

const router = express.Router();

router
  .post("/sign-up", userController.signUp)
  .post("/login", userController.login)
  .get("/refresh-token", userController.refreshToken)
  .put("/update",authMiddleware, userController.update);

export const userRouter = router;
