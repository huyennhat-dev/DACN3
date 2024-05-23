import React from "react";
// import Slider from "../Slider";
import { useAppSelector, useAppDispatch } from "../../../hooks/redux";
import { setVolume } from "../../../redux/features/audioSlice";
import { Slider } from "antd";
const VolumeSliderControl: React.FC<{
  auRef: HTMLAudioElement | null | undefined;
}> = ({ auRef }) => {
  const volume: number | null = useAppSelector((state) => state.audio.volume);
  const dispatch = useAppDispatch();



  const onChange = (value: number) => {
    if (auRef) {
      dispatch(setVolume(value / 100));
      auRef.volume = value / 100;
    }
  };

  const onChangeComplete = (value: number) => {
    localStorage.setItem("volume", String(value / 100));
  };

  return (
    <Slider
      styles={{
        rail: { backgroundColor: "#d2d2d2" },
        track: { backgroundColor: "#673AB7" },
      }}
      autoFocus={false}
      value={volume * 100}
      defaultValue={volume * 100}
      onChange={onChange}
      onChangeComplete={onChangeComplete}
      className="w-21 custom-slider"
    />
  );
};

export default VolumeSliderControl;
