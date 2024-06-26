import React from "react"
import { SvgProps } from "../../utils/types"

const Pause: React.FC<SvgProps> = ({ setColor, setWidth, setHeight, ...others }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      fill="none"
      width={ setWidth }
      height={ setHeight }
      { ...others }
    >
      <path
        d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"
        fill={ setColor }
      />
    </svg>
  )
}

export default Pause