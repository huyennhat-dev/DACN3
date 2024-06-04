import React, { useState } from "react";
import { playlist, sound } from "../../utils/types";
import { env } from "../../configs/env";
import Play from "../Icons/Play";
import { IconDots, IconHeart, IconX } from "@tabler/icons-react";
import { Popconfirm } from "antd";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { handleImageError } from "../../utils";
import playlistApi from "../../api/playlist.api";
import { getToken } from "../../utils/tokenUtils";
import { useAudio } from "../../context/AudioContext";
import { changeIconPlay, setAutoPlay, setPlaylistSong, setSoundPlay } from "../../redux/features/audioSlice";
import { useNavigate } from "react-router-dom";
import { da } from "date-fns/locale";

const PlayListItem = ({
  data,
  onDelete,
}: {
  data: playlist;
  onDelete?: () => void;
}) => {
  const { audioRef } = useAudio();
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const [isHover, setHover] = useState<boolean>(false);
  const uid = useAppSelector((state) => state.auth.userInfo?.id);

  const playSound = (sound: sound) => {
    if (audioRef && audioRef.current) {
      audioRef.current.play();
    }
    dispatch(setSoundPlay(sound));
    dispatch(changeIconPlay(true));
    dispatch(setAutoPlay(true));
  };


  const getPlaylistData = async (): Promise<sound[]> => {
    const rs = await playlistApi.read(data._id!, { token: getToken()! })
    return rs.data.sounds
  }

  const handlePlayPlaylist = async () => {

    const playlistData = await getPlaylistData()
    playSound(playlistData![0]);
    dispatch(setPlaylistSong({ _id: data._id!, title: data.title!, sounds: playlistData }));
  }

  const handleNavigate = () => {
    navigate(`/album/${data._id}`)
  }

  return (
    <div className="text-start" onClick={handleNavigate}>
      <div
        onMouseOver={() => {
          setHover(true);
        }}
        onMouseOut={() => {
          setHover(false);
        }}
        className="relative w-full rounded overflow-hidden shadow-md "
      >
        <img
          src={`${env.apiUrl}/static/${data.photo}`}
          alt={data.title}
          onError={handleImageError}
          className={`${isHover && "scale-110"
            } duration-[400ms] ease-in-out w-full h-full object-cover`}
        />

        {isHover && (
          <div className="absolute z-1 top-0 right-0 bottom-0 left-0 w-full h-full bg-black/20 flex items-center justify-center duration-300 ease-in-out">
            <div className="flex items-center justify-around w-full max-w-xs">
              {onDelete ? <Popconfirm
                icon={null}
                placement="top"
                title="Xóa playlist này?"
                okText="Xóa "
                cancelText="Hủy"
                onConfirm={onDelete}
              >
                <button className="hover:bg-white/30 p-2 rounded-full">
                  <IconX size={16} color="#fff" />
                </button>
              </Popconfirm> : <button className="hover:bg-white/30 p-2 rounded-full">
                <IconHeart size={16} color="#fff" />
              </button>}
              <button onClick={handlePlayPlaylist} className="hover:bg-white/30 p-2 rounded-xl">
                <Play setColor="white" setHeight="1.2rem" setWidth="1.2rem" />
              </button>
              <button className="hover:bg-white/30 p-2 rounded-full">
                <IconDots size={16} color="#fff" />
              </button>
            </div>
          </div>
        )}
      </div>
      <h3 className="text-base px-1 font-medium mt-1 line-clamp-2 overflow-hidden">
        {data.title}
      </h3>
      {uid != data.user?._id && (
        <p className="text-xs px-1  hover:text-primary-100 cursor-pointer hover:underline">
          {data.user?.fullName}
        </p>
      )}
    </div>
  );
};

export default PlayListItem;
