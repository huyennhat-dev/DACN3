import React from "react";
import { useAppSelector } from "../../hooks/redux";
interface Props {
  classes: string;
}

const PlaylistDrawer = ({ classes }: Props) => {
  const isOpenPlayList = useAppSelector((state) => state.audio.isOpenPlaylist);

  return (
    <div
      className={` absolute top-0 right-0 z-999 overflow-hidden transition-all duration-300 ${
        isOpenPlayList ? "w-100" : "w-0"
      }  bg-white shadow  ${classes}`}
    >

        
    </div>
  );
};

export default PlaylistDrawer;
