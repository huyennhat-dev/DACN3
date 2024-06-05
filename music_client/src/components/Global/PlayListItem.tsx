import React, { useEffect, useState } from "react";
import { playlist, sound } from "../../utils/types";
import { env } from "../../configs/env";
import Play from "../Icons/Play";
import { IconDots, IconHeart, IconX } from "@tabler/icons-react";
import { Popconfirm, message } from "antd";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { handleImageError } from "../../utils";
import playlistApi from "../../api/playlist.api";
import { getToken } from "../../utils/tokenUtils";
import { useAudio } from "../../context/AudioContext";
import {
  changeIconPlay,
  setAutoPlay,
  setPlaylistSong,
  setSoundPlay,
} from "../../redux/features/audioSlice";
import { useNavigate } from "react-router-dom";
import MusicWave from "../Icons/MusicWave";

interface Props {
  playlist: playlist;
  onDelete?: () => void;
}

const PlayListItem = ({ playlist, onDelete }: Props) => {
  const { audioRef } = useAudio();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isHover, setHover] = useState<boolean>(false);
  const uid = useAppSelector((state) => state.auth.userInfo?.id);
  const isPlay = useAppSelector((state) => state.audio.isPlay);
  const playlistId = useAppSelector((state) => state.audio.playlistSong?._id);

  const [isPlayPlaylist, setIsPlayPlaylist] = useState<boolean>(false);

  const playSound = (sound: sound) => {
    if (audioRef && audioRef.current) {
      audioRef.current.play();
    }
    dispatch(setSoundPlay(sound));
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

  const getPlaylistData = async (): Promise<sound[]> => {
    const rs = await playlistApi.read(playlist._id!, { token: getToken()! });
    return rs.data.sounds;
  };

  const handlePlayPlaylist = async () => {
    if (isPlay) { 
      pauseSound()
    } else {
      const playlistData = await getPlaylistData();
      if (playlistData.length <= 0)
        return message.warning("Playlist này chưa có bản nhạc nào!");
      playSound(playlistData![0]);
      dispatch(
        setPlaylistSong({
          _id: playlist._id!,
          title: playlist.title!,
          sounds: playlistData,
        })
      );
    }

  };

  const handleNavigate = () => {
    navigate(`/album/${playlist._id}`)
  };

  useEffect(() => {
    if (isPlay && playlistId == playlist._id) {
      setIsPlayPlaylist(true)
    } else {
      setIsPlayPlaylist(false)

    }
  }, [isPlay, playlistId])




  return (
    <div className="text-start">
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
          src={`${env.apiUrl}/static/${playlist?.photo ||
            (playlist?.sounds?.length! > 0 && playlist?.sounds![0].photo!)
            }`}
          alt={playlist?.title}
          onError={handleImageError}
          className={`${isHover && "scale-110"
            } duration-[400ms] ease-in-out w-full h-full object-cover`}
        />

        {(isHover || isPlayPlaylist) && (
          <div className="absolute z-1 top-0 right-0 bottom-0 left-0 w-full h-full bg-black/20 flex items-center justify-center duration-300 ease-in-out">
            <div
              onClick={handleNavigate}
              className="absolute z-2 top-0 right-0 bottom-0 left-0 w-full h-full cursor-pointer"
            />
            <div className="absolute z-3 flex items-center justify-around w-full max-w-xs">
              {onDelete ? (
                <Popconfirm
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
                </Popconfirm>
              ) : (
                <button className="hover:bg-white/30 p-2 rounded-full">
                  <IconHeart size={16} color="#fff" />
                </button>
              )}
              <button
                onClick={handlePlayPlaylist}
                className="relative hover:bg-white/30 p-2 rounded-xl min-w-10 min-h-10 "
              >
                {isPlayPlaylist ? (
                  <MusicWave color="#fff" classes="w-full h-full  left-0 bottom-2.5" />
                ) : (
                  <Play setColor="white" setHeight="1.2rem" setWidth="1.2rem" />
                )}
              </button>
              <button className="hover:bg-white/30 p-2 rounded-full">
                <IconDots size={16} color="#fff" />
              </button>
            </div>
          </div>
        )}
      </div>
      <h3 className="text-base px-1 font-medium mt-1 line-clamp-2 overflow-hidden">
        {playlist?.title}
      </h3>
      {uid != playlist?.user?._id && (
        <p className="text-xs px-1  hover:text-primary-100 cursor-pointer hover:underline">
          {playlist?.user?.fullName}
        </p>
      )}
    </div>
  );
};

export default PlayListItem;
