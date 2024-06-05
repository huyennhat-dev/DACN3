import express from "express";
import homeController from "~/controllers/home.controller";

const router = express.Router();

router.get("/index", homeController.home)
.get("/search", homeController.search)



export const homeRouter = router;
