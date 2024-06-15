import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { handleImageError } from "../../../utils";
import { IconCamera } from "@tabler/icons-react";
import Button from "../Button";
import ImgCrop from "antd-img-crop";
import { Upload, message } from "antd";
import authApi from "../../../api/auth.api";
import { userType } from "../../../utils/types";
import { setToken } from "../../../redux/features/authSlice";
import { env } from "../../../configs/env";

type updateType = {
  photo: string;
  fullName: string;
  description: string;
  current_password: string;
  new_password: string;
  wallet_address: string;
  confirm_new_password: string;
};

const ProfileTab = () => {
  const uid = useAppSelector((state) => state.auth.userInfo?.id);
  const [isChangePassword, setIsChangePassword] = useState<boolean>(false);
  const [userData, setUserData] = useState<userType>();
  const [errorData, setErrorData] = useState<updateType>({
    photo: "",
    fullName: "",
    description: "",
    new_password: "",
    current_password: "",
    wallet_address: "",
    confirm_new_password: "",
  });

  const [updateData, setUpdateData] = useState<updateType>({
    photo: "",
    fullName: "",
    description: "",
    new_password: "",
    current_password: "",
    wallet_address: "",
    confirm_new_password: "",
  });

  useEffect(() => {
    setUpdateData((prev) => ({
      ...prev,
      fullName: userData?.fullName || "",
      wallet_address: userData?.wallet_address || "",
      description: userData?.description || "",
      photo: env.apiUrl + "/static/" + userData?.photo || "",
    }));
  }, [userData]);

  useEffect(() => {
    const getUserData = () => {
      authApi.getUser(uid!).then((rs: any) => {
        setUserData(rs.data);
      });
    };

    getUserData();
  }, []);

  const getBase64 = (file: File, callback: (result: string) => void) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = reader.result as string;
      callback(base64String);
    };
  };

  const handleUpdateState = (value: any, key: string) => {
    setUpdateData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleChangeImage = (info: any) => {
    if (info.file.status === "error") {
      getBase64(info.file.originFileObj, (base64Data) => {
        handleUpdateState(base64Data, "photo");
      });
    }
  };

  const handleConfirmPassword = (value: string) => {
    if (value != updateData.new_password) {
      return setErrorData((prev) => ({
        ...prev,
        confirm_new_password: "Mật khẩu mới không trùng khớp",
      }));
    } else {
      return setErrorData((prev) => ({
        ...prev,
        confirm_new_password: "",
      }));
    }
  };
  const dispatch = useAppDispatch()

  const handleSubmit = () => {
    authApi.update({ ...updateData }).then((rs: any) => {
      dispatch(setToken({ token: rs.accessToken }))
      message.success("Cập nhật thành công!");
    }).catch((err) => {
      message.error(err.response.data.message)
    })
  };

  return (
    <div className="mr-5 h-full overflow-auto hide-scroll">
      <div className="w-full ">
        <div className="relative  rounded-full p-1 border-4 border-primary-50 w-30 h-30">
          <img
            src={updateData.photo}
            onError={handleImageError}
            alt=""
            className="rounded-full object-cover"
          />
          <label
            htmlFor="upload-photo"
            className="absolute z-9 bg-white w-8 h-8 rounded-full flex items-center justify-center bottom-2 right-0 cursor-pointer"
          >
            <IconCamera size={20} />
          </label>
          <ImgCrop rotationSlider showGrid aspect={1} quality={1}>
            <Upload
              onChange={handleChangeImage}
              className="hidden"
              id="upload-photo"
              accept="image/*"
            >
              <div>chon anh</div>
            </Upload>
          </ImgCrop>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="w-full px-2">
          <div className="w-full my-3 h-[22px]"></div>
          <div className="w-full my-3">
            <label htmlFor="fullName">Tên hiển thị</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={updateData.fullName || ""}
              onChange={(e) => handleUpdateState(e.target.value, "fullName")}
              placeholder="Tên hiển thị của bạn"
              className="shadow appearance-none border rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="w-full my-3">
            <label htmlFor="wallet-address">Địa chỉ ví</label>
            <input
              type="text"
              id="wallet-address"
              name="wallet-address"
              value={updateData.wallet_address || ""}
              onChange={(e) =>
                handleUpdateState(e.target.value, "wallet_address")
              }
              placeholder="Địa chỉ ví của bạn"
              className="shadow appearance-none border rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="w-full my-3">
            <label htmlFor="description">Mô tả ngắn</label>
            <textarea
              id="description"
              name="description"
              value={updateData.description || ""}
              onChange={(e) => handleUpdateState(e.target.value, "description")}
              className="shadow h-[35px] appearance-none border rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="px-2">
          <div className="w-full my-3  ">
            <input
              type="checkbox"
              checked={isChangePassword}
              onChange={() => setIsChangePassword(!isChangePassword)}
              id="isChangePassword"
              name="isChangePassword"
              className="mr-2 cursor-pointer"
            />
            <label htmlFor="isChangePassword">Đổi mật khẩu</label>
          </div>
          {isChangePassword && (
            <div className="w-full my-3">
              <label htmlFor="current-password">Mật khẩu hiện tại</label>
              <input
                type="password"
                id="current-password"
                name="current-password"
                value={updateData.current_password || ""}
                onChange={(e) =>
                  handleUpdateState(e.target.value, "current_password")
                }
                placeholder="Mật khẩu hiện tại của bạn"
                className="shadow appearance-none border rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          )}
          {isChangePassword && (
            <div className="w-full my-3">
              <label htmlFor="new-password">Mật khẩu mới</label>
              <input
                type="password"
                id="new-password"
                name="new-password"
                value={updateData.new_password || ""}
                onChange={(e) =>
                  handleUpdateState(e.target.value, "new_password")
                }
                placeholder="Mật khẩu hiện tại của bạn"
                className="shadow appearance-none border rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          )}
          {isChangePassword && (
            <div className="w-full my-3">
              <label htmlFor="confirm-new-password">Xác nhận khẩu mới</label>
              <input
                type="password"
                id="confirm-new-password"
                name="confirm-new-password"
                onChange={(e) => handleConfirmPassword(e.target.value)}
                placeholder="Mật khẩu hiện tại của bạn"
                className="shadow appearance-none border rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errorData.confirm_new_password.length > 0 && (
                <p className="text-xs text-danger-200">
                  {errorData.confirm_new_password}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="w-full text-center my-3">
        <Button
          onclick={handleSubmit}
          title="Cập nhật"
          classes={` py-2 px-5 text-white text-sm font-medium rounded-xl bg-primary-300`}
        />
      </div>
    </div>
  );
};

export default ProfileTab;
