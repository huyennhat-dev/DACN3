import React, { useEffect, useRef } from "react";
import Controls from "./Control";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  changeIconPlay,
  setCurrentIndexPlaylist,
  setCurrentTime,
  setDuration,
  setInfoSoundPlayer,
  setSoundPlay,
} from "../../redux/features/audioSlice";
import soundApi from "../../api/sound.api";
import { getToken } from "../../utils/tokenUtils";
import { env } from "../../configs/env";
import { useAudio } from "../../context/AudioContext";
import Lyric from "./Lyric";
import { playlist, sound } from "../../utils/types";

const Player = () => {
  const { audioRef } = useAudio();
  const songId = useAppSelector((state) => state.audio.sound._id!);
  const infoSoundPlayer = useAppSelector(
    (state) => state.audio.infoSoundPlayer
  );
  const volume = useAppSelector((state) => state.audio.volume);
  const isLoop = useAppSelector((state) => state.audio.isLoop);
  const isPlay = useAppSelector((state) => state.audio.isPlay);
  const playlistSong: playlist = useAppSelector((state) => state.audio.playlistSong!);
  const currentIndexPlaylist = useAppSelector(
    (state) => state.audio.currentIndexPlaylist
  );

  const dispatch = useAppDispatch();




  useEffect(() => {
    (async () => {
      try {
        if (!songId) {
          return;
        } else {
          const token = getToken();

          soundApi
            .getSound({ token: token! }, songId)
            .then((rs) => {
              dispatch(
                setInfoSoundPlayer({
                  ...rs.data,
                  main_sound: rs.data.main_sound && (env.apiUrl + "/static/" + rs.data.main_sound),
                  preview_sound: rs.data.preview_sound && (env.apiUrl + "/static/" + rs.data.preview_sound),
                  photo: env.apiUrl + "/static/" + rs.data.photo,
                })
              );
              if (audioRef.current) audioRef.current.volume = volume;
            })
            .catch((err) => {
              localStorage.removeItem("songId");
              console.log(err);
            });
        }
      } catch (err) {
        console.log("error:" + err);
      }
    })();
  }, [songId]);


  return (
    <>
      {songId && (
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

            if (playlistSong !== undefined && playlistSong?.sounds?.length! > 0) {
              let currentIndex;

              if (currentIndexPlaylist === playlistSong?.sounds?.length! - 1) {
                currentIndex = 0;
              } else {
                currentIndex = currentIndexPlaylist + 1;
              }

              dispatch(setCurrentIndexPlaylist(currentIndex));

              if (playlistSong && Array.isArray(playlistSong.sounds) && playlistSong.sounds[currentIndex]) {
                const sound = playlistSong.sounds[currentIndex];
                if (typeof sound === 'object' && '_id' in sound) {
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
};

export default Player;
