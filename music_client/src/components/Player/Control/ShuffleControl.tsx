import React from "react"
import IconShuffle from "../../Icons/Shuffle"

const ShuffleControl: React.FC = () => {
  return(
    <button className="mx-2 my-0 style__buttons" title="Shuffle">
      <IconShuffle setColor="#485565" setWidth="16px" setHeight="16px" />
    </button>
  )
}

export default ShuffleControl