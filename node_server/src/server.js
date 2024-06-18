import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { corsOptions } from "~/config/cors";
import env from "~/config/env";
import connectDB from "~/config/dbconnection";
import { errorHandlingMiddleware } from "~/middlewares/errorHandlingMiddleware";
import { apiV1 } from "~/routes/v1";
import path from "path";
import fs from "fs";

connectDB(); // Kết nối tới CSDL

const app = express(); // Tạo ứng dụng Express
app.use(cors(corsOptions)); // Sử dụng CORS theo cấu hình từ corsOptions
app.use(express.json({ limit: "500mb" })); // Cho phép JSON body lên tới 500mb
app.use(cookieParser()); // Sử dụng middleware để parse cookie
app.use("/api/v1/", apiV1); // Định tuyến các API version 1
app.use("/api/v1/static", express.static(path.join(__dirname, "public"))); // Phục vụ các tệp tĩnh từ thư mục public
app.use(errorHandlingMiddleware); // Middleware xử lý lỗi

const port = env.PORT || 8000; // Lấy cổng từ biến môi trường hoặc sử dụng cổng mặc định 8000

const directories = [
  path.join(__dirname, "public", "uploads", "sounds", "main"),
  path.join(__dirname, "public", "uploads", "sounds", "short"),
  path.join(__dirname, "public", "uploads", "lyrics"),
  path.join(__dirname, "public", "uploads", "images"),
];

// Tạo các thư mục nếu chưa tồn tại
directories.forEach((directory) => {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }
});



// Lắng nghe các kết nối tới cổng đã chỉ định
app.listen(port, env.HOST || "localhost", () => {
  console.log(`Server is running on port: ${port}`);
});
