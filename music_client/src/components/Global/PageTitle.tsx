import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  const location = useLocation();
  const isPlay = useAppSelector((state) => state.audio.isPlay);
  const infoSoundPlayer = useAppSelector(
    (state) => state.audio.infoSoundPlayer
  );

  useEffect(() => {
    if (isPlay) {
      document.title = `${infoSoundPlayer.name!} - ${infoSoundPlayer.user
        ?.fullName!}`;
    } else {
      document.title = title;
    }
  }, [isPlay, infoSoundPlayer, location, title]);

  return null;
};

export default PageTitle;
