import {
    IconCoinEuro,
    IconHeart,
    IconMusic,
    IconPlaylistAdd,
} from "@tabler/icons-react";
import React from "react";

interface Props {
    buySound?: (() => void) | null;
    addToAlbum?: () => void;
    AddToPlaylist?: () => void;
    addToFavourite?: () => void;
}

const TrackPopup = ({ AddToPlaylist, addToAlbum, addToFavourite, buySound }: Props) => {



    return (
        <ul className="px-2 py-1">
            {buySound && <li
                onClick={buySound}
                className="flex items-center justify-start gap-2 mb-2 cursor-pointer hover:text-primary-200">
                <IconCoinEuro strokeWidth={1.5} size={20} /> <span>Mua bản nhạc</span>
            </li>}
            <li
                onClick={addToAlbum}
                className="flex items-center justify-start gap-2 mb-2 cursor-pointer hover:text-primary-200">
                <IconMusic strokeWidth={1.5} size={20} /> <span>Thêm vào danh sách phát</span>
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
    );
};

export default TrackPopup;
