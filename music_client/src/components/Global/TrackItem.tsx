import React, { useState } from "react";
import Play from "../Icons/Play";
import { sound } from "../../utils/types";
import { env } from "../../configs/env";
import { formatCoin, formatRelativeTime } from "../../utils/format";
import { IconDots } from "@tabler/icons-react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  changeIconPlay,
  setAutoPlay,
  setInfoSoundPlayer,
  setSongId,
} from "../../redux/features/audioSlice";
import MusicWave from "../Icons/MusicWave";
import { Popover, message } from "antd";
import { useAudio } from "../../context/AudioContext";
import TrackPopup from "./TrackPopup";
import { toast } from "react-toastify";
import transactionApi from "../../api/transaction.api";
import soundApi from "../../api/sound.api";
import { getToken } from "../../utils/tokenUtils";

const TrackItem = ({ data }: { data: sound }) => {
  const dispatch = useAppDispatch();
  const songId = useAppSelector((state) => state.audio.songId);
  const info = useAppSelector((state) => state.auth.userInfo);
  const { audioRef } = useAudio();

  const [isCoverHover, setCoverHover] = useState<boolean>(false);
  const isPlay = useAppSelector((state) => state.audio.isPlay);

  const [openPopup, setOpenPopup] = useState<boolean>(false);

  const playSound = () => {
    if (audioRef && audioRef.current) {
      audioRef.current.play();
    }
    dispatch(setSongId(data._id!));
    dispatch(changeIconPlay(true));
    dispatch(setAutoPlay(true));
  };

  const pauseSound = () => {
    if (audioRef && audioRef.current) {
      audioRef.current.pause();
    }
    dispatch(changeIconPlay(false));
    dispatch(setAutoPlay(false));
  };

  const handleClickPlaySound = () => {
    if (isPlay) {
      if (data._id != songId) {
        if (!data.main_sound)
          message.warning(
            "Bản phải trả phí nếu muốn nghe đầy đủ bản nhạc này!"
          );
        return playSound();
      }
      pauseSound();
    } else {
      if (!data.main_sound)
        message.warning("Bản phải trả phí nếu muốn nghe đầy đủ bản nhạc này!");
      playSound();
    }
  };

  const handleBuySound = () => {
    if (!info?.id) return toast.warning("Bạn chưa đăng nhập!");

    try {
      transactionApi
        .buySound(data._id!)
        .then((rs) => {
          soundApi.getSound({ token: getToken()! }, songId).then((rs: any) => {
            dispatch(
              setInfoSoundPlayer({
                ...rs.data,
                main_sound:
                  rs.data.main_sound &&
                  env.apiUrl + "/static/" + rs.data.main_sound,
                preview_sound:
                  rs.data.preview_sound &&
                  env.apiUrl + "/static/" + rs.data.preview_sound,
                photo: env.apiUrl + "/static/" + rs.data.photo,
              })
            );
            message.success(rs.data.message);
          });
        })
        .catch((err: any) => {
          toast.error(err.response.data.message);
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div
      onMouseOver={() => {
        setCoverHover(true);
      }}
      onMouseOut={() => {
        setCoverHover(false);
      }}
      className={`flex items-center  justify-start hover:bg-primary-100/20 px-2 py-1 rounded duration-100 ease-in-out ${songId == data._id && "bg-primary-100/20"
        }`}
    >
      <div className="relative w-14 h-14 cursor-pointer rounded mr-2">
        <img
          src={env.apiUrl + "/static/" + data.photo}
          alt={data.name}
          className=" w-14 h-14 object-cover rounded"
        />
        {(songId == data._id || isCoverHover) && (
          <div
            onClick={handleClickPlaySound}
            className="absolute left-0 right-0 bottom-0 top-0 flex items-center justify-center bg-black/20 rounded"
          >
            {!(songId == data._id && isPlay) ? (
              <Play setColor="white" setHeight="20px" setWidth="20px" />
            ) : (
              <MusicWave color="#fff" />
            )}
          </div>
        )}
      </div>

      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h5
            onClick={handleClickPlaySound}
            className="line-clamp-1 overflow-hidden font-medium cursor-pointer hover:text-primary-300"
          >
            {data.name}
          </h5>
          {(data.price! > 0 && data.user?._id != info?.id) && (
            <h5 className="font-bold text-xs text-[#e19435]">
              {formatCoin(data.price!)}
            </h5>
          )}
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-grey-500 hover:underline hover:text-primary-300 cursor-pointer">
              {data.user?.fullName}
            </p>
            <p className="text-xs text-grey-500">
              {formatRelativeTime(data.createdAt!)}
            </p>
          </div>
          <Popover
            placement="rightTop"
            content={
              <TrackPopup buySound={data.price ? handleBuySound : null} />
            }
            trigger="click"
          >
            <div
              onClick={() => setOpenPopup(!openPopup)}
              className=" relative w-6 h-6 rounded-full hover:text-primary-300 hover:bg-primary-300/30 cursor-pointer flex items-center justify-center"
            >
              <IconDots className="rotate-90" size={20} />
            </div>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default TrackItem;
