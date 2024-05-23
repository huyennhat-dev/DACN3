import React from "react"
import { useAppSelector } from "../../../hooks/redux"
import { formatTime } from "../../../utils/format"
import { Slider, Tooltip } from "antd"

const SongSliderControl: React.FC<{ auRef: HTMLAudioElement | null | undefined; color?: string }> = ({ auRef, color }) => {

  const currentTime = useAppSelector((state) => state.audio.currentTime)
  const duration = useAppSelector((state) => state.audio.duration)

  const onChange = (value: number) => {
    if (auRef) {
      auRef.currentTime = (value / 100) * auRef.duration
    }
  };

  const onChangeComplete = (value: number) => {
    localStorage.setItem("volume", String(value / 100));
  };


  return (
    <div className={`flex items-center justify-between text-[${color||'#000'}]`}>
      <p className="mx-2 w-10 text-center font-medium text-xs" style={{color:color}}>{auRef && formatTime(auRef.currentTime)}</p>

      <Slider
        tooltip={{ open: false }}
        styles={{
          rail: { backgroundColor: "#d2d2d2" },
          track: { backgroundColor: "#673AB7" },
        }}
        value={(currentTime / duration) * 100}
        onChange={onChange}
        onChangeComplete={onChangeComplete}
        className="w-full custom-slider m-0 flex-1"
      />
      <p className="mx-2 w-10 text-center font-medium text-xs" style={{color:color}}>{formatTime(duration)}</p>

    </div>
  )
}

export default SongSliderControl