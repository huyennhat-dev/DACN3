import { IconLogout, IconRecharging, IconUpload, IconUser } from "@tabler/icons-react";
import { logout } from "../../redux/features/authSlice";
import { useAppDispatch } from "../../hooks/redux";
import { startTransition } from "react";
import { useNavigate } from "react-router-dom";
import { changeIconPlay, setAutoPlay, setSoundPlay } from "../../redux/features/audioSlice";
import { useAudio } from "../../context/AudioContext";

const ProfileMenu = ({ hidePopover }: { hidePopover: () => void }) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const { audioRef } = useAudio();

    const handleNavigateRechargingCoin = () => {
        hidePopover()
        startTransition(() => navigate("/recharge"))
    };

    const handleNavigateUpload = () => {
        hidePopover()
        startTransition(() => navigate("/upload-sound"))
    }

    const handleLogout = () => {
        try {
            dispatch(logout());
            if (audioRef && audioRef.current) {
                audioRef.current.pause();
            }
            dispatch(changeIconPlay(false));
            dispatch(setAutoPlay(false));
            dispatch(setSoundPlay({}))

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
                    onClick={handleNavigateRechargingCoin}
                    className="flex mb-2 items-center justify-start gap-2 cursor-pointer hover:text-primary-200"
                >
                    <IconRecharging strokeWidth={1.5} size={20} /> <span>Nạp coin</span>
                </li>
                <li
                    onClick={handleNavigateUpload}
                    className="flex mb-2 items-center justify-start gap-2 cursor-pointer hover:text-primary-200"
                >
                    <IconUpload strokeWidth={1.5} size={20} /> <span>Tải lên</span>
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
