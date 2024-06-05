import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import TrackItem from "./TrackItem";
import Button from "./Button";
import {
  changeIconPlay,
  setAutoPlay,
  setPlaylistSong,
  setSoundPlay,
} from "../../redux/features/audioSlice";
import { playlist, sound } from "../../utils/types";
import { useAudio } from "../../context/AudioContext";

interface Props {
  classes: string;
}

const PlaylistDrawer = ({ classes }: Props) => {
  const { audioRef } = useAudio();

  const dispatch = useAppDispatch();
  const isOpenPlayList = useAppSelector((state) => state.audio.isOpenPlaylist);
  const playlistData: playlist = useAppSelector(
    (state) => state.audio.playlistSong!
  );
  const newSounds = useAppSelector((state) => state.app.homeData?.newSounds);
  const soundPlay = useAppSelector((state) => state.audio.sound);
  const [previousList, setPreviousList] = useState<sound[]>([]);
  const [nextList, setNextList] = useState<sound[]>([]);
  const lastElementRef = useRef<HTMLLIElement | null>(null);

  const slicePlaylist = () => {
    let firstArray: sound[] = [];
    let secondArray: sound[] = [];

    if (playlistData && playlistData.sounds) {
      const index =
        playlistData.sounds.findIndex((sound) => sound._id === soundPlay._id) + 1;
      firstArray = playlistData.sounds.slice(0, index);
      secondArray = playlistData.sounds.slice(index);
    }

    setPreviousList(firstArray);
    setNextList(secondArray);
  };

  useEffect(() => {
    slicePlaylist();
  }, [playlistData, soundPlay]);

  const playSound = (sound: sound) => {
    if (audioRef && audioRef.current) {
      audioRef.current.play();
    }
    dispatch(setSoundPlay(sound));
    dispatch(changeIconPlay(true));
    dispatch(setAutoPlay(true));
  };

  const handleAddPlaylist = (playlist: playlist) => {
    playSound(playlist.sounds![0]);
    dispatch(setPlaylistSong(playlist));
  };

  useEffect(() => {
    if (lastElementRef.current) {
      lastElementRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }, [previousList]);

  return (
    <div
      className={`absolute top-0 right-0 z-999  overflow-hidden transition-all duration-500 flex flex-col ${isOpenPlayList ? "w-100 px-5 " : "w-0 px-0"
        } bg-white shadow ${classes}`}
    >
      <h5 className=" font-medium text-xl text-nowrap mt-5">Danh sách phát</h5>
      {playlistData?.sounds?.length! > 0 ? (
        <ul className=" py-3 overflow-scroll overflow-x-hidden hide-scroll  transition-all duration-500 ">
          {previousList.map((item: sound, index) => {
            const isLastItem = index === previousList.length - 1;
            return (
              <li
                key={index}
                ref={isLastItem ? lastElementRef : null}
                className={`w-[calc(25rem-2.5rem)] flex-nowrap ${soundPlay._id !== item._id && "filter grayscale"
                  }`}
              >
                <TrackItem sound={item} />
              </li>
            );
          })}
          {previousList.length !== playlistData?.sounds?.length! && (
            <li className="w-[calc(25rem-2.5rem)]">
              <h5 className="font-medium mt-2">Tiếp theo</h5>
              <p className="text-xs mb-2">
                Từ danh sách phát{" "}
                <span className="text-primary-100 font-semibold">
                  {playlistData.title}
                </span>
              </p>
            </li>
          )}
          {nextList.map((item: sound, index) => (
            <li key={index} className="flex-nowrap w-[calc(25rem-2.5rem)]">
              <TrackItem sound={item} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="h-full flex flex-col items-center justify-center w-[calc(25rem-2.5rem)]">
          <div className="w-full text-center">
            <p className="my-2">
              Khám phá thêm các bản nhạc mới của Music Cloud
            </p>
            <Button
              onclick={() =>
                handleAddPlaylist({
                  title: "Mới phát hành",
                  sounds: newSounds?.items,
                })
              }
              classes="px-4 py-2 text-white text-sm font-medium rounded-xl bg-primary-300"
              title="Phát nhạc mới nhất"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PlaylistDrawer;
