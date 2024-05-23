import express from "express";
import { transitionRouter } from "./transition";
import { userRouter } from "./user";
import { soundRouter } from "./sound";
import { homeRouter } from "./home";
import { playlistRouter } from "./playlist";
import { historyRouter } from "./history";

const router = express.Router();

router.use("/transition", transitionRouter);
router.use("/user", userRouter);
router.use("/sound", soundRouter);
router.use("/home", homeRouter);
router.use("/playlist", playlistRouter);
router.use("/history", historyRouter);


export const apiV1 = router;
