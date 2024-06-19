import {
  IconCircleOff,
  IconCoinEuro,
  IconCopy,
  IconDownload,
  IconHeadphones,
  IconHeart,
  IconHeartMinus,
  IconHeartPlus,
  IconMicrophone2,
  IconMusicMinus,
  IconMusicPlus,
  IconPlayerPause,
  IconPlayerPlay,
  IconPlaylistAdd,
  IconPlaylistX,
  IconShare,
} from "@tabler/icons-react";
import { sound } from "../../../utils/types";
import { env } from "../../../configs/env";
import { handleImageError } from "../../../utils";
import { formatCountNumber } from "../../../utils/format";
import { memo, useState } from "react";
import { useAppSelector } from "../../../hooks/redux";
import { Popover } from "antd";
import PlayListPop from "./PlayListPop";

interface Props {
  sound: sound;
  downloadSound?: () => void;
  showLyric?: () => void;
  blockSound?: () => void;
  playSound?: () => void;
  buySound?: (() => void) | null;
  addToPlaylist?: () => void;
  removeToPlaylist?: () => void;
  removeToAlbum?: () => void;
  addToFavourite?: () => void;
  removeToFavourite?: () => void;
  addToClipboard?: () => void;
  shareSound?: () => void;
}

const TrackPopup = memo((props: Props) => {
  const songId = useAppSelector((state) => state.audio.sound?._id);
  const isPlay = useAppSelector((state) => state.audio.isPlay);

  const [openPlaylistPopup, setOpenPlaylistPopup] = useState<boolean>(false);

  const hidePopover = () => {
    setOpenPlaylistPopup(false);
  };
  const handleOpenPopup = (newVisible: boolean) => {
    setOpenPlaylistPopup(newVisible);
  };

  return (
    <div className="px-2 py-1 w-60">
      <div className="flex items-center justify-start gap-1">
        <img
          src={env.apiUrl + "/static/" + props.sound.photo}
          onError={handleImageError}
          alt={props.sound.name}
          className="w-10 h-10 rounded object-cover"
        />
        <div>
          <h6 className=" line-clamp-1 overflow-hidden font-semibold hover:text-primary-100 cursor-pointer">
            {props.sound.name}
          </h6>
          {props.sound.listens! > 0 && (
            <div className="flex items-center justify-start gap-2">
              <div className="flex gap-1 items-center">
                <IconHeart size={16} strokeWidth={1.5} />
                <span className="text-xs">
                  {formatCountNumber(props.sound.listens!)}
                </span>
              </div>
              <div className="flex gap-1 items-center">
                <IconHeadphones size={16} strokeWidth={1.5} />
                <span className="text-xs">
                  {formatCountNumber(props.sound.listens!)}
                </span>
              </div>
            </div>
          )}
          {props.sound.listens! <= 0 && (
            <div className="">
              <p className="text-xs text-grey-500 hover:underline hover:text-primary-300 cursor-pointer">
                {props.sound?.user?.fullName}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="my-3 grid grid-cols-3 rounded-md bg-grey-200  ">
        <div
          onClick={props.downloadSound}
          className="flex flex-col items-center py-2 rounded-md hover:bg-grey-400/70 duration-200 ease-in-out cursor-pointer"
        >
          <IconDownload size={18} strokeWidth={2} />
          <span className="text-xs">Tải xuống</span>
        </div>
        <div
          onClick={props.showLyric}
          className="flex flex-col items-center py-2 rounded-md hover:bg-grey-400/70 duration-200 ease-in-out cursor-pointer"
        >
          <IconMicrophone2 size={18} strokeWidth={2} />
          <span className="text-xs">Lời bài hát</span>
        </div>
        <div
          onClick={props.blockSound}
          className="flex flex-col items-center py-2 rounded-md hover:bg-grey-400/70 duration-200 ease-in-out cursor-pointer"
        >
          <IconCircleOff size={18} strokeWidth={2} />
          <span className="text-xs">Chặn</span>
        </div>
      </div>
      <ul>
        <li
          onClick={props.playSound}
          className="flex items-center justify-start gap-2 mb-2 cursor-pointer hover:text-primary-200"
        >
          {!(songId == props.sound?._id && isPlay) ? (
            <IconPlayerPlay strokeWidth={1.5} size={20} />
          ) : (
            <IconPlayerPause strokeWidth={1.5} size={20} />
          )}
          <span>
            {!(songId == props.sound?._id && isPlay) ? "Phát" : "Tạm dừng"}
          </span>
        </li>
        {props.buySound && (
          <li
            onClick={props.buySound}
            className="flex items-center justify-start gap-2 mb-2 cursor-pointer hover:text-primary-200"
          >
            <IconCoinEuro strokeWidth={1.5} size={20} />
            <span>Mua bản nhạc</span>
          </li>
        )}
        {props.addToPlaylist && !props.removeToPlaylist && (
          <li
            onClick={props.addToPlaylist}
            className="flex items-center justify-start gap-2 mb-2 cursor-pointer hover:text-primary-200"
          >
            <IconMusicPlus strokeWidth={1.5} size={20} />
            <span>Thêm vào danh sách phát</span>
          </li>
        )}
        {props.removeToPlaylist && (
          <li
            onClick={props.removeToPlaylist}
            className="flex items-center justify-start gap-2 mb-2 cursor-pointer hover:text-primary-200"
          >
            <IconMusicMinus strokeWidth={1.5} size={20} />
            <span>Xóa khỏi danh sách phát</span>
          </li>
        )}
        {!props.removeToAlbum ? (
          <Popover
            open={openPlaylistPopup}
            onOpenChange={handleOpenPopup}
            placement="leftTop"
            content={
              <PlayListPop data={[props.sound]} hidePopover={hidePopover} />
            }
            trigger="click"
          >
            <li className="flex items-center justify-start gap-2 mb-2 cursor-pointer hover:text-primary-200">
              <IconPlaylistAdd strokeWidth={1.5} size={20} />
              <span>Thêm vào playlist</span>
            </li>
          </Popover>
        ) : (
          <li
            onClick={props.removeToAlbum}
            className="flex items-center justify-start gap-2 mb-2 cursor-pointer hover:text-primary-200"
          >
            <IconPlaylistX strokeWidth={1.5} size={20} />
            <span>Xóa khỏi playlist</span>
          </li>
        )}
        {props.addToFavourite && (
          <li
            onClick={props.addToFavourite}
            className="flex items-center justify-start gap-2 mb-2 cursor-pointer hover:text-primary-200"
          >
            <IconHeartPlus strokeWidth={1.5} size={20} />
            <span>Thêm vào yêu thích</span>
          </li>
        )}
        {props.removeToFavourite && (
          <li
            onClick={props.removeToFavourite}
            className="flex items-center justify-start gap-2 mb-2 cursor-pointer hover:text-primary-200"
          >
            <IconHeartMinus strokeWidth={1.5} size={20} />
            <span>Xóa khỏi yêu thích</span>
          </li>
        )}
        <li
          onClick={props.addToClipboard}
          className="flex items-center justify-start gap-2 mb-2 cursor-pointer hover:text-primary-200"
        >
          <IconCopy strokeWidth={1.5} size={20} />
          <span>Sao chép liên kết</span>
        </li>
        <li
          onClick={props.shareSound}
          className="flex items-center justify-start gap-2  cursor-pointer hover:text-primary-200"
        >
          <IconShare strokeWidth={1.5} size={20} /> <span>Chia sẻ</span>
        </li>
      </ul>
    </div>
  );
});

export default TrackPopup;
