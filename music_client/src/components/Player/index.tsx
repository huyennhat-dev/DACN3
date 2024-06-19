import React, { memo, useEffect, useRef, useState } from "react";
import Controls from "./Control";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  changeIconPlay,
  setCurrentIndexPlaylist,
  setCurrentTime,
  setDuration,
  setInfoSoundPlayer,
  setPlaylistSong,
  setSoundPlay,
} from "../../redux/features/audioSlice";
import soundApi from "../../api/sound.api";
import { getToken } from "../../utils/tokenUtils";
import { env } from "../../configs/env";
import { useAudio } from "../../context/AudioContext";
import Lyric from "./Lyric";
import { playlist } from "../../utils/types";

const Player = memo(() => {
  const { audioRef } = useAudio();
  const sound = useAppSelector((state) => state.audio.sound);
  const infoSoundPlayer = useAppSelector(
    (state) => state.audio.infoSoundPlayer
  );
  const volume = useAppSelector((state) => state.audio.volume);
  const isLoop = useAppSelector((state) => state.audio.isLoop);
  const isPlay = useAppSelector((state) => state.audio.isPlay);
  const playlistSong: playlist = useAppSelector(
    (state) => state.audio.playlistSong!
  );
  const currentIndexPlaylist = useAppSelector(
    (state) => state.audio.currentIndexPlaylist
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        if (!sound) {

          return;
        } else {
          console.log("get sound")
          const token = getToken();

          soundApi
            .getSound({ token: token! }, sound._id!)
            .then((rs) => {
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
              if (audioRef.current) audioRef.current.volume = volume;
            })
            .catch((err) => {
              localStorage.removeItem("sound-play");
              dispatch(setSoundPlay(null))
              dispatch(setPlaylistSong({ ...playlistSong, sounds: playlistSong?.sounds!.filter((item) => item._id != sound._id!) }))
            });
        }
      } catch (err) {
        console.log("error:" + err);
      }
    })();
  }, [sound]);

  return (
    <>
      {sound && (
        <div className="relative z-20 border-t-[1px] flex flex-col justify-around h-20  inset-x-0 bottom-0 ">
          <Controls auRef={audioRef.current} />
        </div>
      )}
      <audio
        ref={audioRef}
        src={infoSoundPlayer.main_sound || infoSoundPlayer.preview_sound}
        className="hidden"
        loop={isLoop}
        autoPlay={isPlay}
        hidden
        onTimeUpdate={() => {
          if (audioRef.current) {
            dispatch(setCurrentTime(audioRef.current.currentTime));
          }
        }}
        onLoadedData={() => {
          if (audioRef.current) {
            dispatch(setDuration(audioRef.current.duration));
          }
        }}
        onEnded={() => {
          if (!isLoop) {
            dispatch(setCurrentTime(0));
            dispatch(changeIconPlay(false));

            if (
              playlistSong !== undefined &&
              playlistSong?.sounds?.length! > 1
            ) {
              let currentIndex;

              if (currentIndexPlaylist === playlistSong?.sounds?.length! - 1) {
                currentIndex = 0;
              } else {
                currentIndex = currentIndexPlaylist + 1;
              }

              dispatch(setCurrentIndexPlaylist(currentIndex));

              if (
                playlistSong &&
                Array.isArray(playlistSong.sounds) &&
                playlistSong.sounds[currentIndex]
              ) {
                const sound = playlistSong.sounds[currentIndex];
                if (typeof sound === "object" && "_id" in sound) {
                  dispatch(setSoundPlay(sound));
                }
              }

              dispatch(changeIconPlay(true));
            }
          }
        }}
      />

      <Lyric auRef={audioRef.current} />
    </>
  );
});

export default Player;
