import fs from "fs";

import userModel from "~/models/user";
import ApiError from "~/utils/ApiError";
import bcrypt from "bcryptjs";
import performCRUD from "~/services/performCRUD";
import randomCatAvatar from "~/utils/randomCatAvatar";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from "~/utils/token";
import { fileNameGeneral, typeFile } from "~/utils";
import env from "~/config/env";
import path from "path";
import deleteFile from "~/services/deleteFile";

const isDev = env.BUILD_MODE !== "production";

const userController = {
  getUser: async (req, res, next) => {
    try {
      const uid = req.params.id;
      const user = await userModel
        .findById(uid)
        .select("fullName photo description wallet_address");
      return res.status(201).json({ statusCode: 201, data: user });
    } catch (error) {
      return next(new ApiError(500, "Đã xảy ra lỗi. Vui lòng thử lại sau."));
    }
  },
  signUp: async (req, res, next) => {
    try {
      const { username, password, fullName, wallet_address } = req.body;

      if (!username || !password || !fullName) {
        return next(new ApiError(400, "Vui lòng điền đầy đủ thông tin."));
      }
      const user = await userModel.findOne({ username }).exec();

      if (user) {
        return next(new ApiError(409, "Tài khoản đã tồn tại trong hệ thống."));
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await performCRUD(userModel, "create", {
        username,
        fullName,
        password: hashedPassword,
        wallet_address: wallet_address ?? null,
        photo: randomCatAvatar(),
      });

      const userPayload = {
        id: newUser._id,
        wallet_address: newUser.wallet_address,
        fullName: newUser.fullName,
        photo: newUser.photo,
      };

      const accessToken = generateAccessToken(userPayload);
      const refreshToken = generateRefreshToken(userPayload);

      res.cookie("refreshToken", refreshToken, {
        httpOnly: false,
        secure: !isDev,
        sameSite: isDev ? "lax" : "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      return res.status(201).json({ statusCode: 201, accessToken });
    } catch (error) {
      return next(new ApiError(500, "Đã xảy ra lỗi. Vui lòng thử lại sau."));
    }
  },
  login: async (req, res, next) => {
    try {
      const { username, password } = req.body;
      const user = await userModel.findOne({ username });

      if (!user || !(await user.comparePassword(password))) {
        return next(new ApiError(401, "Username hoặc mật khẩu không đúng."));
      }

      const userPayload = {
        id: user._id,
        wallet_address: user.wallet_address,
        fullName: user.fullName,
        photo: user.photo,
      };
      const accessToken = generateAccessToken(userPayload);
      const refreshToken = generateRefreshToken(userPayload);

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: !isDev,
        sameSite: isDev ? "lax" : "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      return res
        .status(200)
        .json({ statusCode: 200, accessToken, refreshToken });
    } catch (error) {
      return next(new ApiError(500, "Đã xảy ra lỗi. Vui lòng thử lại sau."));
    }
  },
  update: async (req, res, next) => {
    try {
      const {
        photo,
        fullName,
        description,
        new_password,
        current_password,
        wallet_address,
      } = req.body;
      const user = await userModel.findById(req.user.id);

      if (!user) {
        return next(new ApiError(401, "Tài khoản không tồn tại."));
      }
      let hashedPassword;

      const updateData = { wallet_address, description, fullName };

      if (current_password && new_password) {
        if (!(await user.comparePassword(current_password))) {
          return next(new ApiError(401, "Mật khẩu không đúng."));
        }

        hashedPassword = await bcrypt.hash(new_password, 10);
        updateData.password = hashedPassword;
      }

      if (photo && photo.split(":")[0] == "data") {
        const fileName = Date.now();
        const photoPath =
          "uploads/images/" + fileNameGeneral(fileName, typeFile(photo));
        fs.writeFileSync(
          path.join(__dirname, "../public/" + photoPath),
          photo.split(",")[1],
          "base64"
        );
        updateData.photo = photoPath;
        if (user.photo) deleteFile(user.photo);
      }

      let userAfterUpdate;

      userAfterUpdate = await performCRUD(userModel, "update", {
        id: req.user.id,
        ...updateData,
      });

      const userPayload = {
        id: userAfterUpdate._id,
        wallet_address: userAfterUpdate.wallet_address,
        fullName: userAfterUpdate.fullName,
        photo: userAfterUpdate.photo,
        balance: userAfterUpdate.balance,
      };

      const accessToken = generateAccessToken(userPayload);

      return res.status(200).json({ statusCode: 200, accessToken });
    } catch (error) {
      console.log(error);
      return next(new ApiError(500, "Có lỗi xảy ra!"));
    }
  },
  refreshToken: async (req, res, next) => {
    try {
      const { refreshToken } = req.cookies;
      console.log(refreshToken);

      if (!refreshToken) {
        return next(new ApiError(401, "Refresh token không được cung cấp."));
      }

      const userPayload = verifyRefreshToken(refreshToken);
      if (!userPayload) {
        return next(new ApiError(403, "Refresh token không hợp lệ."));
      }
      delete userPayload.iat;
      delete userPayload.exp;

      const newAccessToken = generateAccessToken(userPayload);
      return res
        .status(200)
        .json({ statusCode: 200, accessToken: newAccessToken });
    } catch (error) {
      console.log(error);
      return next(new ApiError(500, "Đã xảy ra lỗi. Vui lòng thử lại sau."));
    }
  },
};

export default userController;
