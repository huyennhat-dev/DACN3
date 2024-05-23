import express from "express";
import cors from "cors";
import cookieParser from 'cookie-parser';
import { corsOptions } from "~/config/cors";
import env from "~/config/env";
import connectDB from "~/config/dbconnection";
import { errorHandlingMiddleware } from "~/middlewares/errorHandlingMiddleware";
import { apiV1 } from "~/routes/v1";
import path from 'path'

import fs from 'fs'

connectDB();

const app = express();
app.use("/api/v1/static", express.static(path.join(__dirname, "public")));
app.use(cors(corsOptions));
app.use(express.json({ limit: '500mb' }));
app.use(cookieParser());
app.use("/api/v1/", apiV1);
app.use(errorHandlingMiddleware);


const port = env.PORT || 8000;


const directories = [
  path.join(__dirname, "public", "uploads", "sounds", "main"),
  path.join(__dirname, "public", "uploads", "sounds", "short"),
  path.join(__dirname, "public", "uploads", "lyrics"),
  path.join(__dirname, "public", "uploads", "images")
];

// Tạo các thư mục nếu chúng chưa tồn tại
directories.forEach(directory => {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }
});

app.listen(port, env.HOST || "localhost", () => {
  console.log(`Server running is port: ${port}`);
});
