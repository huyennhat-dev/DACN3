import React from "react";
import LyricControl from "./LyricControl";
import NextControl from "./NextControl";
import PlayControl from "./PlayControl";
import PreviousControl from "./PreviousControl";
import RepeatControl from "./RepeatControl";
import ShuffleControl from "./ShuffleControl";
import TrackInfo from "./TrackInfo";
import VolumeControl from "./VolumeControl";
import VolumeSliderControl from "./VolumeSliderControl";
import SongSliderControl from "./SongSliderControl";
import PlayListControl from "./PlayListControl";

const Control: React.FC<{ auRef: HTMLAudioElement | null }> = ({ auRef }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 h-full gap-6 mx-[5vw] z-[-1]">
        {/* Track Info */}
        <div className="hidden md:block">
          <TrackInfo />
        </div>
        {/* End Track Info */}

        {/* Mid Controls Button */}
        <div className="col-span-2 flex items-center">
          <div className="w-full">
            <SongSliderControl auRef={auRef} />
            <div className="flex justify-center items-center">
              <div className="md:hidden flex items-center">
                <LyricControl />
                <RepeatControl />

              </div>
              <PreviousControl />
              <PlayControl auRef={auRef} />
              <NextControl />
              <div className="md:hidden flex items-center">
                <VolumeControl auRef={auRef} />
                <PlayListControl />
              </div>
            </div>
          </div>
        </div>
        {/* End Mid Controls Button */}

        {/* Right Controls Button */}
        <div className="hidden justify-center items-center  md:flex">
          <LyricControl />
          <RepeatControl />
          <ShuffleControl />
          <VolumeControl auRef={auRef} />
          <VolumeSliderControl auRef={auRef} />
          <PlayListControl />
        </div>
        {/* End Right Controls Button */}
      </div>
    </>
  );
};

export default Control;
