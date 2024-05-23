import React from "react"
import IconRepeat from "../../Icons/Repeat"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux"
import { setLoop } from "../../../redux/features/audioSlice"

const RepeatControl: React.FC = () => {

  const isLoop = useAppSelector((state) => state.audio.isLoop)
  const dispatch = useAppDispatch()

  const handleRepeat = () => {
    if(isLoop) {
      dispatch(setLoop(false))
    } else {
      dispatch(setLoop(true))
    }
  }

  return(
    <div
      onClick={handleRepeat}
    >
      {
        isLoop
        ?
        <button className="mx-2 my-0 style__buttons" title="Repeat">
          <IconRepeat setColor="#673AB7" setWidth="16px" setHeight="16px" />
        </button>
        :
        <button className="mx-2 my-0 style__buttons" title="Repeat">
          <IconRepeat setColor="#485565" setWidth="16px" setHeight="16px" />
        </button>
      }
    </div>
  )
}

export default RepeatControl