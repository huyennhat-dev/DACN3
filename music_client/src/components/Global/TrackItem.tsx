import { memo, useState } from "react";
import Play from "../Icons/Play";
import { notify, playlist, sound } from "../../utils/types";
import { env } from "../../configs/env";
import { formatCoin, formatRelativeTime } from "../../utils/format";
import { IconDots } from "@tabler/icons-react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  changeIconPlay,
  setAutoPlay,
  setInfoSoundPlayer,
  setPlaylistSong,
  setSoundPlay,
} from "../../redux/features/audioSlice";
import MusicWave from "../Icons/MusicWave";
import { Popover, message } from "antd";
import { useAudio } from "../../context/AudioContext";
import TrackPopup from "./Pop/TrackPopup";
import transactionApi from "../../api/transaction.api";
import soundApi from "../../api/sound.api";
import { getToken } from "../../utils/tokenUtils";
import homeApi from "../../api/home.api";
import { createSlug, handleImageError } from "../../utils";
import fileApi from "../../api/file.api";
import fileDownload from "js-file-download";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { socket } from "../../utils/socket";
import notiApi from "../../api/noti.api";

interface Props {
  sound: sound,
  removeToPlaylist?: () => void
  removeToAlbum?: () => void
}

const TrackItem = memo(({ sound, removeToPlaylist, removeToAlbum }: Props) => {
  const { audioRef } = useAudio();
  const location = useLocation()
  const { pathname } = location;

  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const songId = useAppSelector((state) => state.audio.sound?._id);
  const playlistSong = useAppSelector((state) => state.audio.playlistSong);
  const info = useAppSelector((state) => state.auth.userInfo);
  const isPlay = useAppSelector((state) => state.audio.isPlay);
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const [isCoverHover, setCoverHover] = useState<boolean>(false);

  const handleOpenPopup = (newVisible: boolean) => {
    setOpenPopup(newVisible);
  };

  const playSound = () => {
    if (audioRef && audioRef.current) {
      audioRef.current.play();
    }
    dispatch(setSoundPlay(sound));
    dispatch(changeIconPlay(true));
    dispatch(setAutoPlay(true));
  };

  const pauseSound = () => {
    if (audioRef && audioRef.current) {
      audioRef.current.pause();
    }
    dispatch(changeIconPlay(false));
    dispatch(setAutoPlay(false));
  };

  const playOrPauseSound = (isPlay: boolean, sound: sound, songId: string) => {
    if (isPlay) {
      if (sound._id !== songId) {
        if (!sound.main_sound && info?.id !== sound.user?._id) {
          message.warning(
            "Bản phải trả phí nếu muốn nghe đầy đủ bản nhạc này!"
          );
        }
        playSound();
      } else {
        pauseSound();
      }
    } else {
      if (!sound.main_sound) {
        message.warning("Bản phải trả phí nếu muốn nghe đầy đủ bản nhạc này!");
      }
      playSound();
    }
  };

  const updatePlaylist = (sound: sound) => {
    const isSoundExists = playlistSong?.sounds?.some(
      (existingSound) => existingSound._id === sound._id
    );

    if (!isSoundExists && playlistSong?.sounds) {
      const newPlayList: playlist = {
        ...playlistSong,
        sounds: [sound, ...playlistSong?.sounds],
      };
      dispatch(setPlaylistSong(newPlayList));
    }
  };

  const saveRecentSound = async (sound: sound, songId: string) => {
    const token = getToken();
    if (songId !== sound._id && token) {
      const rs = await soundApi.getSound({}, sound._id!)
      if (rs)
        await homeApi.saveRecent({ type: "sound", id: sound._id! });
    }
  };

  const handleClickPlaySound = async () => {
    playOrPauseSound(isPlay, sound, songId!);

    if (isPlay && sound._id !== songId) {
      updatePlaylist(sound);
    }

    await saveRecentSound(sound, songId!);
  };

  const handlePushNoti = async (sound: sound) => {

    const notiData: notify = {
      user: sound.user!,
      content: {
        title: `${sound.name} đã bán`,
        message: `${info?.fullName} đã mua ${sound.name}`
      }
    }

    const rs = await notiApi.create(notiData)
    console.log(rs)
    socket.emit("new-notify", rs.data);

  }

  const handleBuySound = async () => {
    if (!info?.id) return message.warning("Bạn chưa đăng nhập!");

    try {
      await transactionApi.buySound(sound._id!);
      handlePushNoti(sound)
      message.success("Mua thành công");
      const token = getToken();


      if (token && songId) {

        const rs: any = await soundApi.getSound({ token }, songId);
        dispatch(
          setInfoSoundPlayer({
            ...rs.data,
            main_sound: rs.data.main_sound
              && `${env.apiUrl}/static/${rs.data.main_sound}`
            ,
            preview_sound: rs.data.preview_sound
              && `${env.apiUrl}/static/${rs.data.preview_sound}`
            ,
            photo: `${env.apiUrl}/static/${rs.data.photo}`,
          })
        );
      }


    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.message) {
        message.error(err.response.data.message);
      } else {
        console.log(err);
        message.error("An unexpected error occurred");
      }
    }
  };

  const handleDownLoadSound = async () => {
    if (!info?.id) return message.warning("Bạn chưa đăng nhập!");

    try {
      if (!sound.main_sound) return message.warning("Bạn chưa mua bạn nhạc này!")
      const fileName = sound.name + "." + sound.main_sound.split(".")[1]

      const rs: any = await fileApi.download(sound.main_sound)
      fileDownload(rs, fileName)
      message.success("Tải thành công!")
      handleOpenPopup(false)
    } catch (err) {
      console.log(err)
    }
  };

  const handleNavigateToSoundPage = (id: string) => {
    return navigate(`/sound/${id}`)
  }

  const handleAddToPlaylist = () => {
    if (playlistSong) {
      const newPlaylist: playlist = {
        ...playlistSong,
        sounds: [...playlistSong?.sounds!.filter((s) => s._id != sound._id), sound]
      }
      dispatch(setPlaylistSong(newPlaylist))
      message.success("Thêm thành công!")
    }
  }

  return (
    <div
      onMouseOver={() => {
        setCoverHover(true);
      }}
      onMouseOut={() => {
        setCoverHover(false);
      }}
      className={`flex flex-1 items-center  justify-start hover:bg-primary-100/20 px-2 py-1 rounded duration-100 ease-in-out ${songId == sound._id && "bg-primary-100/20"
        }`}
    >
      <div className="relative w-14 h-14 cursor-pointer rounded mr-2">
        <img
          src={env.apiUrl + "/static/" + sound.photo}
          alt={sound.name}
          onError={handleImageError}
          className=" w-14 h-14 object-cover rounded"
        />
        {(songId == sound._id || isCoverHover) && (
          <div
            onClick={handleClickPlaySound}
            className="absolute left-0 right-0 bottom-0 top-0 flex items-center justify-center bg-black/20 rounded"
          >
            {!(songId == sound._id && isPlay) ? (
              <Play setColor="white" setHeight="20px" setWidth="20px" />
            ) : (
              <div className="relative min-w-8 min-h-8">
                <MusicWave color="#fff" classes="h-full w-full bottom-2" />
              </div>

            )}
          </div>
        )}
      </div>

      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h5
            title={sound.name}
            onClick={() => handleNavigateToSoundPage(`${sound.slug}-${sound._id}`)}
            className="line-clamp-1 overflow-hidden text-sm md:text-base font-medium cursor-pointer hover:text-primary-300"
          >
            {sound.name}
          </h5>
          {sound.price! > 0 && sound.user?._id != info?.id && (
            <h5 className="font-bold text-xs text-[#e19435]">
              {formatCoin(sound.price!)}
            </h5>
          )}
        </div>
        <div className="flex items-center justify-between">
          <div>
            <Link
              to={`/author/${createSlug(sound.user?.fullName || "")}/${sound.user?._id}`}
              className="text-xs text-grey-500 hover:underline hover:text-primary-300 cursor-pointer">
              {sound.user?.fullName}
            </Link>
            <p className="text-xs text-grey-500">
              {formatRelativeTime(sound.createdAt!)}
            </p>
          </div>
          <Popover
            open={openPopup}
            placement="rightTop"
            onOpenChange={handleOpenPopup}
            content={
              <TrackPopup
                sound={sound}
                playSound={handleClickPlaySound}
                downloadSound={handleDownLoadSound}
                removeToPlaylist={removeToPlaylist}
                addToPlaylist={handleAddToPlaylist}
                removeToAlbum={removeToAlbum}
                buySound={
                  sound.price && info?.id != sound.user?._id && !pathname.includes("/library")
                    ? handleBuySound
                    : null
                }
              />
            }
            trigger="click"
          >
            <div
              onClick={() => setOpenPopup(!openPopup)}
              className={` relative w-6 h-6 rounded-full hover:text-primary-300 hover:bg-primary-300/30 cursor-pointer flex items-center justify-center ${isCoverHover ? "opacity-100" : "opacity-0"
                }`}
            >
              <IconDots className="rotate-90" size={20} />
            </div>
          </Popover>
        </div>
      </div>
    </div>
  );
});

export default TrackItem;
