import React from "react"
import IconPlay from "../../Icons/Play"
import IconPause from "../../Icons/Pause"
import { useAppSelector, useAppDispatch } from "../../../hooks/redux"
import { changeIconPlay } from "../../../redux/features/audioSlice"

const PlayControl = ({ auRef, color }: { color?: string, auRef: HTMLAudioElement | null | undefined }) => {

  const isPlay = useAppSelector((state) => state.audio.isPlay)
  const dispatch = useAppDispatch()
  const handlePlaySong = () => {
    if (isPlay === true) {
      dispatch(changeIconPlay(false))
      if (auRef) {
        auRef.pause()
      }
    } else {
      dispatch(changeIconPlay(true))
      if (auRef) {
        auRef.play()
      }
    }
  }

  return (
    <button
      className={"w-[42px] h-[42px] mx-2 my-0 style__buttons"}
      title="Play Song"
      onClick={handlePlaySong}
    >
      {
        isPlay
          ? <IconPause setColor={`${color || "#485565"}`} setWidth="24px" setHeight="24px" />
          : <IconPlay setColor={`${color || "#485565"}`} setWidth="24px" setHeight="24px" />
      }
    </button>
  )
}

export default PlayControl