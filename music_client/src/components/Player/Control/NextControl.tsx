import React from "react";
import IconNext from "../../Icons/Next";
import { useAppSelector, useAppDispatch } from "../../../hooks/redux";
import {
  setSoundPlay,
  setCurrentIndexPlaylist,
  changeIconPlay,
} from "../../../redux/features/audioSlice";
import { playlist, sound } from "../../../utils/types";

const NextControl: React.FC = () => {
  const dispatch = useAppDispatch();

  const currentIndexPlaylist = useAppSelector(
    (state) => state.audio.currentIndexPlaylist
  );
  const playlistSong: playlist = useAppSelector(
    (state) => state.audio.playlistSong!
  );
  const soundPlay = useAppSelector((state) => state.audio.sound);

  const handleNextSong = () => {
    if (playlistSong !== undefined && playlistSong?.sounds?.length! > 0) {
      let currentIndex;

      if (currentIndexPlaylist === playlistSong?.sounds?.length! - 1) {
        currentIndex = 0;
      } else {
        const sounds: sound[] =
          playlistSong?.sounds?.filter(
            (sound): sound is sound =>
              typeof sound === "object" && "_id" in sound
          ) || [];

        currentIndex = sounds.findIndex((sound) => sound._id === soundPlay._id) + 1;
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
  };

  return (
    <button
      onClick={handleNextSong}
      className="mx-2 my-0 style__buttons"
      title="Next Song"
    >
      <IconNext setColor="#485565" setWidth="16px" setHeight="16px" />
    </button>
  );
};

export default NextControl;
