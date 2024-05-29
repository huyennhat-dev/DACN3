import { IconLogout, IconRecharging, IconUser } from "@tabler/icons-react";
import { logout, setToken } from "../../redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { startTransition } from "react";
import { useNavigate } from "react-router-dom";
import { changeIconPlay, setAutoPlay, setSongId } from "../../redux/features/audioSlice";
import { useAudio } from "../../context/AudioContext";

const ProfileMenu = ({ hidePopover }: { hidePopover: () => void }) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const { audioRef } = useAudio();

    const handleRechargingCoin = () => {
        hidePopover()
        startTransition(() => navigate("/recharge"))
    };

    const handleLogout = () => {
        try {
            dispatch(logout());
            if (audioRef && audioRef.current) {
                audioRef.current.pause();
            }
            dispatch(changeIconPlay(false));
            dispatch(setAutoPlay(false));
            dispatch(setSongId(""))

            hidePopover()
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <ul className="px-2 py-1">
                <li className="flex mb-2 items-center justify-start gap-2 cursor-pointer hover:text-primary-200">
                    <IconUser strokeWidth={1.5} size={20} />{" "}
                    <span>Thông tin tài khoản</span>
                </li>
                <li
                    onClick={handleRechargingCoin}
                    className="flex mb-2 items-center justify-start gap-2 cursor-pointer hover:text-primary-200"
                >
                    <IconRecharging strokeWidth={1.5} size={20} /> <span>Nạp coin</span>
                </li>
                <li
                    onClick={handleLogout}
                    className="flex items-center justify-start gap-2 cursor-pointer hover:text-primary-200"
                >
                    <IconLogout strokeWidth={1.5} size={20} /> <span>Đăng xuất</span>
                </li>
            </ul>

        </>
    );
};

export default ProfileMenu;
