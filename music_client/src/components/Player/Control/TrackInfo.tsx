import React from "react"
import { useAppSelector } from "../../../hooks/redux"
import { Link } from "react-router-dom"
import { createSlug } from "../../../utils"

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
        <div className="font-medium text-xs truncate cursor-default text-wrap line-clamp-2 overflow-hidden">
          {info.name}
        </div>
        <div className=" hover:text-primary-100 text-xs ">
          <Link
            className="hover:underline"
            to={`/author/${createSlug(info.user?.fullName || "")}/${info.user?._id}`}
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
