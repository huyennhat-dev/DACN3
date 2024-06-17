import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { playlist, sound, userType } from "../utils/types";
import authApi from "../api/auth.api";
import soundApi from "../api/sound.api";
import { getToken } from "../utils/tokenUtils";
import playlistApi from "../api/playlist.api";
import { env } from "../configs/env";
import Button from "../components/Global/Button";
import Play from "../components/Icons/Play";
import MusicWave from "../components/Icons/MusicWave";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import homeApi from "../api/home.api";
import { useAudio } from "../context/AudioContext";
import {
  changeIconPlay,
  setAutoPlay,
  setPlaylistSong,
  setSoundPlay,
} from "../redux/features/audioSlice";
import { message } from "antd";
import TrackItem from "../components/Global/TrackItem";
import PlayListItem from "../components/Global/PlayListItem";
import { handleImageError } from "../utils";

type authorType = {
  user: userType | null;
  sounds: sound[];
  playlist: playlist[];
};

const AuthorPage = () => {
  const { id } = useParams();
  const { audioRef } = useAudio();
  const dispatch = useAppDispatch();

  const isPlay = useAppSelector((state) => state.audio.isPlay);
  const songId = useAppSelector((state) => state.audio.infoSoundPlayer._id);
  const playlistSong = useAppSelector((state) => state.audio.playlistSong);
  const info = useAppSelector((state) => state.auth.userInfo);

  const [data, setData] = useState<authorType>({
    user: null,
    playlist: [],
    sounds: [],
  });

  const getUserData = () => {
    authApi
      .getUser(id!)
      .then((rs) => setData((prev) => ({ ...prev, user: rs.data })));
  };

  const getSoundByOther = () => {
    soundApi
      .getSoundByOther({
        keyword: id,
        token: getToken()!,
      })
      .then((rs) => setData((prev) => ({ ...prev, sounds: rs.data })));
  };

  const getPlaylistByOther = () => {
    playlistApi
      .getPlaylistByOther({
        keyword: id,
        token: getToken()!,
      })
      .then((rs) => setData((prev) => ({ ...prev, playlist: rs.data })));
  };

  useEffect(() => {
    getUserData();
    getSoundByOther();
    getPlaylistByOther();
  }, []);

  const playSound = () => {
    if (audioRef && audioRef.current) {
      audioRef.current.play();
    }
    dispatch(setSoundPlay(data.sounds[0]));
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

  const playOrPauseSound = (isPlay: boolean, sound: sound, songId: string) => {
    if (isPlay) {
      if (sound._id !== songId) {
        if (!sound.main_sound && info?.id !== sound.user?._id) {
          message.warning(
            "Bản phải trả phí nếu muốn nghe đầy đủ bản nhạc này!"
          );
        }
        playSound();
      } else {
        pauseSound();
      }
    } else {
      console.log(sound);
      if (!sound.main_sound) {
        message.warning("Bản phải trả phí nếu muốn nghe đầy đủ bản nhạc này!");
      }
      playSound();
    }
  };

  const updatePlaylist = (sound: sound) => {
    const isSoundExists = playlistSong?.sounds?.some(
      (existingSound) => existingSound._id === sound._id
    );

    if (!isSoundExists && playlistSong?.sounds) {
      const newPlayList: playlist = {
        ...playlistSong,
        sounds: [sound, ...playlistSong?.sounds],
      };
      dispatch(setPlaylistSong(newPlayList));
    }
  };

  const saveRecentSound = async (sound: sound, songId: string) => {
    const token = getToken();
    if (songId !== sound._id && token) {
      await homeApi.saveRecent({ type: "sound", id: sound._id! });
    }
  };

  const handleClickPlaySound = async () => {
    playOrPauseSound(isPlay, data.sounds[0]!, songId!);
    if (isPlay && data.sounds[0]?._id !== songId) {
      updatePlaylist(data.sounds[0]!);
    }
    await saveRecentSound(data.sounds[0]!, songId!);
  };
  return (
    <div className="md:mr-5 flex-1 h-full bg-white p-5 rounded">
      <div className="flex items-center">
        <div className=" mx-0 md:mx-5 w-20 h-20 md:w-30 md:h-30 rounded-full overflow-hidden">
          <img
            src={env.apiUrl + "/static/" + data.user?.photo}
            alt={data.user?.fullName}
            onError={handleImageError}
            className="rounded-full object-cover"
          />
        </div>
        <div className="ml-3 md:ml-0 flex-1 md:flex-none">
          <h1 className="font-semibold text-title-sm md:text-title-xl">
            {data.user?.fullName}
          </h1>
          <div className="flex items-center gap-5 mt-2">
            <p className="  text-xs md:text-sm">
              <span>{(data.user?.follower || 0).toLocaleString()}</span>
              <span className="ml-1">Người quan tâm</span>
            </p>
            <Button
              onclick={() => { }}
              title="Quan tâm"
              classes="px-4 py-[2px] text-sm text-white rounded-lg bg-primary-100"
            />
          </div>
        </div>
        {data.sounds.length > 0 && <div
          onClick={handleClickPlaySound}
          className=" ml-5 w-10 h-10 flex items-center justify-start cursor-pointer"
        >
          {!(data.sounds.find((sound) => sound._id == songId) && isPlay) ? (
            <Play setColor="#fa3d6a" setHeight="24px" setWidth="24px" />
          ) : (
            <div className="relative min-w-8 min-h-8">
              <MusicWave color="#fa3d6a" classes="h-full w-full bottom-2" />
            </div>
          )}
        </div>}
      </div>

      {data.sounds.length > 0 && (
        <div className="my-5">
          <h2 className="font-medium my-2 text-title-sm">Nhạc nổi bật</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {data.sounds.map((sound) => (
              <TrackItem key={sound._id} sound={sound} />
            ))}
          </div>
        </div>
      )}
      {data.playlist.length > 0 && (
        <div>
          <h2 className="font-medium my-2 text-title-sm">Nhạc nổi bật</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-2">
            {data.playlist.map((item) => (
              <PlayListItem key={item._id} playlist={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthorPage;
