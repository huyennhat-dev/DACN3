import React from "react"
import IconPrevious from "../../Icons/Previous"
import { useAppSelector, useAppDispatch } from "../../../hooks/redux"
import { setSoundPlay, setCurrentIndexPlaylist, changeIconPlay } from "../../../redux/features/audioSlice"
import { playlist } from "../../../utils/types"

const PreviousControl: React.FC = () => {

  const currentIndexPlaylist = useAppSelector((state) => state.audio.currentIndexPlaylist)
  const playlistSong: playlist = useAppSelector((state) => state.audio.playlistSong!)

  const dispatch = useAppDispatch()

  const handleNextSong = () => {
    if (playlistSong !== undefined && playlistSong?.sounds?.length! > 0) {
      let currentIndex
      if (currentIndexPlaylist === 0) {
        currentIndex = 0
      } else {
        currentIndex = currentIndexPlaylist - 1
      }

      dispatch(setCurrentIndexPlaylist(
        currentIndex
      ))

      if (playlistSong && Array.isArray(playlistSong.sounds) && playlistSong.sounds[currentIndex]) {
        const sound = playlistSong.sounds[currentIndex];
        if (typeof sound === 'object' && '_id' in sound) {
          dispatch(setSoundPlay(sound));
        }
      }

      dispatch(changeIconPlay(true))
    }
  }

  return (
    <button
      onClick={handleNextSong}
      className="mx-2 my-0 style__buttons" title="Previous Song"
    >
      <IconPrevious setColor="#485565" setWidth="16px" setHeight="16px" />
    </button>
  )
}

export default PreviousControl