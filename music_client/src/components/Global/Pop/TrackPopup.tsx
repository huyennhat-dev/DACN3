import {
    IconCoinEuro,
    IconHeart,
    IconMusicMinus,
    IconMusicPlus,
    IconPlaylistAdd,
} from "@tabler/icons-react";
import React from "react";
import { sound } from "../../../utils/types";

interface Props {
    sound: sound,
    buySound?: (() => void) | null;
    addToAlbum?: () => void;
    AddToPlaylist?: () => void;
    addToFavourite?: () => void;
}

const TrackPopup = ({ AddToPlaylist, addToAlbum, addToFavourite, buySound, sound }: Props) => {

    return (

        <div className="px-2 py-1">
            <div className="flex items-center justify-start gap-1">
                <img src={ sound.photo} alt="" />
            </div>
            <ul >
                {buySound && <li
                    onClick={buySound}
                    className="flex items-center justify-start gap-2 mb-2 cursor-pointer hover:text-primary-200">
                    <IconCoinEuro strokeWidth={1.5} size={20} /> <span>Mua bản nhạc</span>
                </li>}
                <li
                    onClick={addToAlbum}
                    className="flex items-center justify-start gap-2 mb-2 cursor-pointer hover:text-primary-200">
                    <IconMusicPlus strokeWidth={1.5} size={20} /> <span>Thêm vào danh sách phát</span>
                </li>
                <li
                    onClick={addToAlbum}
                    className="flex items-center justify-start gap-2 mb-2 cursor-pointer hover:text-primary-200">
                    <IconMusicMinus strokeWidth={1.5} size={20} /> <span>Xóa khỏi danh sách phát</span>
                </li>
                <li
                    onClick={AddToPlaylist}
                    className="flex items-center justify-start gap-2 mb-2 cursor-pointer hover:text-primary-200">
                    <IconPlaylistAdd strokeWidth={1.5} size={20} /> <span>Thêm vào playlist</span>
                </li>
                <li
                    onClick={addToFavourite}
                    className="flex items-center justify-start gap-2  cursor-pointer hover:text-primary-200">
                    <IconHeart strokeWidth={1.5} size={20} /> <span>Thêm vào yêu thích</span>
                </li>
            </ul>
        </div>

    );
};

export default TrackPopup;
