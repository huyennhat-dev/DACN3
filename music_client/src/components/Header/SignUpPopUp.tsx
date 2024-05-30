import React, { ChangeEvent, useState } from "react";
import Button from "../Global/Button";
import authApi from "../../api/auth.api";
import { userType } from "../../utils/types";
import Loader from "../../common/Loader";
import { useAppDispatch } from "../../hooks/redux";
import { setBalance, setToken } from "../../redux/features/authSlice";
import { getBalance } from "../../utils";
import { useAudio } from "../../context/AudioContext";
import { setSongId } from "../../redux/features/audioSlice";
import { message } from "antd";

interface Props {
    hideModal: () => void
    changeModalAction: () => void
}

const SignUpPopUp = ({ hideModal, changeModalAction }: Props) => {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState<boolean>(false);
    const { audioRef } = useAudio();

    const [formData, setFormData] = useState<userType>({
        username: "",
        fullName: "",
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

        if (!data.username!.trim()) {
            errors.push("Tên người dùng là bắt buộc");
        } else if (!/^[a-zA-Z0-9_]+$/.test(data.username!)) {
            errors.push("Tên người dùng chỉ được chứa chữ cái, số và dấu gạch dưới");
        }

        // Kiểm tra họ và tên
        if (!data.fullName?.trim()) {
            errors.push("Họ và tên là bắt buộc");
        } else if (data.fullName?.length < 3) {
            errors.push("Họ và tên phải có ít nhất 3 ký tự");
        } else if (data.fullName?.length > 50) {
            errors.push("Họ và tên không được vượt quá 50 ký tự");
        }

        // Kiểm tra mật khẩu
        if (!data.password?.trim()) {
            errors.push("Mật khẩu là bắt buộc");
        } else if (data.password.length < 6) {
            errors.push("Mật khẩu phải có ít nhất 6 ký tự");
        } else if (!/[A-Z]/.test(data.password)) {
            errors.push("Mật khẩu phải chứa ít nhất một chữ cái in hoa");
        } else if (!/[a-z]/.test(data.password)) {
            errors.push("Mật khẩu phải chứa ít nhất một chữ cái thường");
        } else if (!/[0-9]/.test(data.password)) {
            errors.push("Mật khẩu phải chứa ít nhất một số");
        }

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
            .register(formData)
            .then(async (rs: any) => {
                setLoading(false);
                dispatch(setToken({ token: rs.accessToken }));
                dispatch(setSongId(""));
                hideModal()
                const balance = await getBalance();
                if (audioRef && audioRef.current) {
                    audioRef.current.pause();
                }
                if (balance !== null) {
                    dispatch(setBalance({ balance: Number(balance) }));
                }
                message.success("Đăng ký tài khoản thành công!");
            })
            .catch((err) => {
                setLoading(false);
                message.error(err.response.data.message);
            });
        setFormData({ fullName: "", username: "", password: "" });
    };
    return (
        <div className="min-w-100 modal-content">
            {loading && <Loader />}
            <div>
                <h4 className="font-medium text-xl mb-8">
                    Đăng ký tài khoản!
                </h4>

                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="fullName"
                    >
                        Tên của bạn
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName || ""}
                        onChange={handleChange}
                        placeholder="Nguyen Van A"
                    />
                </div>

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
                        className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        name="password"
                        value={formData.password || ""}
                        onChange={handleChange}
                        placeholder="******************"
                    />
                </div>

                <Button
                    onclick={handleSubmit}
                    title="Đăng ký"
                    classes={`w-full py-3 text-white text-sm font-medium rounded-xl bg-primary-300`}
                />
                <Button
                    onclick={changeModalAction}
                    title="Đăng nhập"
                    classes={`w-full mt-2 py-3 text-primary-300 text-sm font-medium rounded-xl border-[1.5px] border-primary-100`}
                />
            </div>
        </div>
    );
};

export default SignUpPopUp;
