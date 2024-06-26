import React, { useRef } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import {
  changeIconPlay,
  setAutoPlay,
  setOpenLyric,
} from "../../redux/features/audioSlice";

import IconArrowDown from "../Icons/ArrowDow";
import SongSliderControl from "./Control/SongSliderControl";
import PreviousControl from "./Control/PreviousControl";
import PlayControl from "./Control/PlayControl";
import NextControl from "./Control/NextControl";
import RepeatControl from "./Control/RepeatControl";
import ShuffleControl from "./Control/ShuffleControl";

const Lyric: React.FC<{ auRef: HTMLAudioElement | null }> = ({ auRef }) => {
  const isLyric = useAppSelector((state) => state.audio.isLyric);
  const isPlay = useAppSelector((state) => state.audio.isPlay);
  const currentTime = useAppSelector((state) => state.audio.currentTime);

  const dispatch = useAppDispatch();

  const lyrRef = useRef<HTMLDivElement>(null);

  const handleCloseLyric = () => {
    if (isLyric) {
      if (lyrRef.current) {
        lyrRef.current.classList.remove("animate-[lyric-up_1s]");
        lyrRef.current.classList.add("animate-[lyric-down_1s]");
      }
      setTimeout(() => {
        dispatch(setOpenLyric(false));
      }, 1000);
    } else {
      dispatch(setOpenLyric(true));
    }
  };

  const infoSoundPlayer = useAppSelector(
    (state) => state.audio.infoSoundPlayer
  );
  const lyric = useAppSelector((state) => state.audio.infoSoundPlayer.lyric);

  function debounce<T extends (...args: any[]) => void>(func: T, wait: number): (...args: Parameters<T>) => void {
    let timeout: ReturnType<typeof setTimeout>;
    return (...args: Parameters<T>): void => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }


  const scrollToView = debounce((index) => {
    document
      .getElementById(`line-${index}`)
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 100);

  return (
    <>
      <div
        className={`fixed z-999999 inset-0 flex flex-col justify-between bg-black transition-all ease-linear duration-100 ${isLyric ? "animate-[lyric-up_1s]" : "hidden"
          }`}
        ref={lyrRef}
      >
        <div
          className={`absolute top-0 bottom-0 left-0 right-0 z-[-1]  `}
          style={{
            backgroundImage: `url(${infoSoundPlayer.photo})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(25px)",
          }}
        />
        <div className="bg-black/45 absolute z-0 top-0 right-0 left-0 bottom-0"></div>
        {/* Close Button */}
        <button
          className="p-2 mx-3 my-3 bg-transparent rounded-[25%] transition-all duration-200 hover:bg-primary-100/30 z-999999 absolute top-2 right-2 md:top-6 md:right-6"
          title="Close"
          onClick={handleCloseLyric}
        >
          <IconArrowDown setColor="white" setWidth="24px" setHeight="24px" />
        </button>
        {/* End Close Button */}

        <div className="relative z-999 md:flex text-center justify-center overflow-y-auto p-2 md:p-20 gap-20 flex-1 hide-scroll">
          <div className="flex items-center mt-20 md:mt-0 justify-center">
            <div className="relative">
            <img
              src={infoSoundPlayer.photo}
              alt={infoSoundPlayer.name}
              className={`w-100 h-100 object-cover rounded-xl shadow-md ${isPlay&&"image-animate"}` }
          
            />
            <div className="absolute rounded-xl top-2 left-2 bottom-2 right-2 image-border"></div>
            </div>
          </div>
          <div className="lyric font-semibold text-[24px] text-white max-w-2xl my-0 flex-1 flex flex-col overflow-y-auto ">
            <div className="mt-[10vh]"></div>
            {lyric ? (
              lyric.map(
                (
                  e: { data: string; startTime: number; endTime: number },
                  index: number
                ) => {
                  if (e.startTime <= currentTime && currentTime <= e.endTime) scrollToView(index);

                  return (
                    <div
                      id={`line-${index}`}
                      key={index}
                      className={
                        "my-[2px] mx-0 px-[18px] py-3 rounded-xl transition-all duration-500 ease-in-out hover:bg-primary-50/10 box-border " +
                        (e.startTime <= currentTime &&
                          currentTime <= e.endTime &&
                          "origin-[center_left]")
                      }

                      
                      onClick={() => {
                        if (auRef) {
                          auRef.currentTime = e.startTime;
                          if (!isPlay) {
                            dispatch(setAutoPlay(true));
                            dispatch(changeIconPlay(true));
                            auRef.play();
                          }
                        }
                      }}
                    >
                      <span
                        className={
                          "cursor-pointer inline-block transition-transform duration-500 ease-in-out " +
                          (e.startTime <= currentTime && currentTime <= e.endTime
                            ? "opacity-100 scale-105"
                            : "opacity-50")
                        }
                      >
                        {e.data}
                      </span>
                    </div>
                  );
                }
              )

            ) : (
              <div className="flex-1 flex items-center justify-center">
                <p>Không có lời bài hát</p>
              </div>
            )}
            <div className="mb-[10vh]"></div>
          </div>
        </div>
        <div className="w-full h-40 relative z-999 ">
          <div className="w-full text-center text-white/80">
            <p className="text-title-md font-medium line-clamp-1  overflow-hidden  px-10">
              {infoSoundPlayer.name}
            </p>
            <p className="text-sm my-2 ">
              <span className="hover:underline hover:text-primary-200/70 cursor-pointer">
                {infoSoundPlayer.user?.fullName}
              </span>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 flex-1">
            <div></div>
            <div className="px-3 py-2 md:px-0 h-full flex items-center">
              <div className="w-full ">
                <SongSliderControl auRef={auRef} color="#fff" />
                <div className="flex justify-center items-center">
                  <RepeatControl  color="#fff"/>
                  <PreviousControl  color="#fff"/>
                  <PlayControl auRef={auRef} color="#fff"/>
                  <NextControl  color="#fff"/>
                  <ShuffleControl  color="#fff"/>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lyric;
