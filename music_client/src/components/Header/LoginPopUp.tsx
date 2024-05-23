import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import Modal from "react-modal";
import Button from "../Global/Button";
import { toast } from "react-toastify";
import authApi from "../../api/auth.api";
import { userType } from "../../utils/types";
import Loader from "../../common/Loader";
import { useAppDispatch } from "../../hooks/redux";
import { setBalance, setToken } from "../../redux/features/authSlice";
import { getBalance } from "../../utils";
import { setSongId } from "../../redux/features/audioSlice";
import { useAudio } from "../../context/AudioContext";
const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "8px",
    },
};

Modal.setAppElement("#root");

interface Props {
    showButton: boolean;
    setShowButton: Dispatch<SetStateAction<boolean>>
}


const LoginPopUp
    = ({ showButton, setShowButton }: Props) => {
        const dispatch = useAppDispatch()
        const [showModal, setShowModal] = useState<boolean>(false);
        const { audioRef } = useAudio();

        const [loading, setLoading] = useState<boolean>(false);

        const handleToggle = () => {
            setShowModal(!showModal);
            setShowButton(!showButton)
        };

        const [formData, setFormData] = useState<userType>({
            username: "",
            password: "",
        });

        const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            setFormData({
                ...formData,
                [name]: value
            });
        };

        const validateFormData = (data: userType): string[] => {
            const errors: string[] = [];

            if (!data.username?.trim())
                errors.push("Tên người dùng là bắt buộc");

            // Kiểm tra mật khẩu
            if (!data.password?.trim())
                errors.push("Mật khẩu là bắt buộc");

            return errors;
        };


        const handleSubmit = () => {
            setLoading(true)
            const validationErrors = validateFormData(formData);

            if (validationErrors.length > 0) {
                validationErrors.forEach(error => toast.warning(error));
                return setLoading(false)
            }

            authApi.login(formData).then(async (rs: any) => {
                setLoading(false)
                handleToggle()
                dispatch(setToken({ token: rs.accessToken }))
                dispatch(setSongId(""))
                const balance = await getBalance();
                if (audioRef && audioRef.current) {
                    audioRef.current.pause();
                }
                if (balance !== null) {
                    dispatch(setBalance({ balance: Number(balance) }));
                }
                toast.success('Đăng nhập thành công!')

            }).catch(err => {
                setLoading(false)
                toast.error(err.response.data.message)
                console.log(err)
            })

            setFormData({ fullName: '', username: '' })

        };

        return (

            <div>

                {!showButton && <Button classes="px-3 py-2 font-medium rounded-md bg-primary-300/75 text-white hover:bg-primary-300 hover:text-white"
                    onclick={handleToggle}
                    title="Đăng nhập" />
                }
                <Modal
                    isOpen={showModal}
                    onRequestClose={handleToggle}
                    style={customStyles}
                >
                    {loading && <Loader />}
                    <div>
                        <h4 className="font-medium text-xl mb-8">
                            Nhập đầy đủ thông tin đăng nhập!
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
                            title="Đăng nhập"
                            classes={`w-full py-3 text-white text-sm font-medium rounded-xl bg-primary-300`}
                        />

                        <Button
                            onclick={handleToggle}
                            title="Hủy"
                            classes={`w-full mt-2 py-3 text-primary-300 text-sm font-medium rounded-xl border-[1.5px] border-primary-300`}
                        />
                    </div>
                </Modal>
            </div>
        );
    };

export default LoginPopUp
    ;
