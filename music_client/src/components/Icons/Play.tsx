import React from "react"
import { SvgProps } from "../../utils/types"

const Play: React.FC<SvgProps> = ({ setColor, setWidth, setHeight, ...others }) => {
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
        d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
        fill={ setColor }
      />
    </svg>
  )
}

export default Play