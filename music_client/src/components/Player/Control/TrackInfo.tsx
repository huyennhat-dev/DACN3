import React from "react"
import { useAppSelector } from "../../../hooks/redux"
import { Link } from "react-router-dom"

const TrackInfo: React.FC = () => {

  const info = useAppSelector((state) => state.audio.infoSoundPlayer)

  return (
    <div className="flex items-center">
      {/* Thumbnail */}
      <img
        src={info.photo}
        alt={info.name}
        className="h-[46px] rounded-[5px]"
      />
      {/* End Thumbnail */}

      {/* Info */}
      <div className="flex flex-col justify-center h-[46px] ml-3">
        <div className="font-medium text-xs text-primary-300 truncate cursor-default text-wrap line-clamp-2">
          {info.name}
        </div>
        <div className=" text-primary-300/70 text-xs ">
          <Link
            className="hover:underline"
            to={""}
          >
            {info.user?.fullName}
          </Link>
        </div>
      </div>
      {/* End Info */}
    </div>
  )
}

export default TrackInfo
