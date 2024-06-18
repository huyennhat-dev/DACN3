import React, { ChangeEvent, useState } from "react";
import Button from "../Global/Button";
import authApi from "../../api/auth.api";
import { userType } from "../../utils/types";
import Loader from "../../common/Loader";
import { useAppDispatch } from "../../hooks/redux";
import { setBalance, setToken } from "../../redux/features/authSlice";
import { getBalance } from "../../utils";
import { useAudio } from "../../context/AudioContext";
import { message } from "antd";

interface Props {
    hideModal: () => void
    changeModalAction: () => void
}

const LoginPopUp = ({ hideModal, changeModalAction }: Props) => {
    const dispatch = useAppDispatch();
    const { audioRef } = useAudio();

    const [loading, setLoading] = useState<boolean>(false);

    const [formData, setFormData] = useState<userType>({
        username: "",
        password: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateFormData = (data: userType): string[] => {
        const errors: string[] = [];

        if (!data.username?.trim()) errors.push("Tên người dùng là bắt buộc");

        // Kiểm tra mật khẩu
        if (!data.password?.trim()) errors.push("Mật khẩu là bắt buộc");

        return errors;
    };

    const handleSubmit = () => {
        setLoading(true);
        const validationErrors = validateFormData(formData);

        if (validationErrors.length > 0) {
            validationErrors.forEach((error) => message.warning(error));
            return setLoading(false);
        }

        authApi
            .login(formData)
            .then(async (rs: any) => {
                setLoading(false);
                dispatch(setToken({ token: rs.accessToken }));
                hideModal()
                const balance = await getBalance();
                if (audioRef && audioRef.current) {
                    audioRef.current.pause();
                }
                if (balance !== null) {
                    dispatch(setBalance({ balance: Number(balance) }));
                }
                message.success("Đăng nhập thành công!");
            })
            .catch((err) => {
                setLoading(false);
                message.error(err.response.data.message);
                console.log(err);
            });

        setFormData({ fullName: "", username: "" });
    };

    return (
        <div className="min-w-100 modal-content">

            {loading && <Loader />}
            <div>
                <h4 className="font-medium text-xl mb-8">
                    Đăng nhập Music Cloud!
                </h4>

                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="username"
                    >
                        Tên đăng nhập
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={formData.username || ""}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                    >
                        Mật khẩu
                    </label>
                    <input
                        className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        name="password"
                        value={formData.password || ""}
                        onChange={handleChange}
                        placeholder="******************"
                    />
                </div>

                <div className="my-2 mb-3">
                    <input type="checkbox" id="show-password" />
                    <label htmlFor="show-password">Hiển thị mật khẩu</label>
                </div>

                <Button
                    onclick={handleSubmit}
                    title="Đăng nhập"
                    classes={`w-full py-3 text-white text-sm font-medium rounded-xl bg-primary-300`}
                />
                <Button
                    onclick={changeModalAction}
                    title="Đăng ký"
                    classes={`w-full mt-2 py-3 text-primary-300 text-sm font-medium rounded-xl border-[1.5px] border-primary-100`}
                />
            </div>
        </div>
    );
};

export default LoginPopUp;
