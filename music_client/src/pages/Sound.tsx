import React, { FormEvent, memo, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import soundApi from "../api/sound.api";
import { getToken } from "../utils/tokenUtils";
import { comment, playlist, sound, userType } from "../utils/types";
import { handleImageError } from "../utils";
import { env } from "../configs/env";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import Play from "../components/Icons/Play";
import MusicWave from "../components/Icons/MusicWave";
import { useAudio } from "../context/AudioContext";
import {
  changeIconPlay,
  setAutoPlay,
  setPlaylistSong,
  setSoundPlay,
} from "../redux/features/audioSlice";
import { message } from "antd";
import homeApi from "../api/home.api";
import { formatCountNumber } from "../utils/format";
import Button from "../components/Global/Button";
import commentApi from "../api/comment.api";
import { IconSend2, IconX } from "@tabler/icons-react";
import CommentItem from "../components/Global/Comment";
import { nanoid } from "nanoid";

const SoundPage = () => {
  const { path } = useParams();
  const parts = path!.split("-");
  const soundId = parts[parts.length - 1];
  const { audioRef } = useAudio();
  const dispatch = useAppDispatch();

  const [sound, setSound] = useState<sound>();
  const [comment, setComment] = useState<comment[]>([]);
  const isPlay = useAppSelector((state) => state.audio.isPlay);
  const songId = useAppSelector((state) => state.audio.infoSoundPlayer._id);
  const playlistSong = useAppSelector((state) => state.audio.playlistSong);
  const info = useAppSelector((state) => state.auth.userInfo);
  const inputRef = useRef<HTMLInputElement>(null);
  const [replyData, setReplyData] = useState<{
    parent: string;
    user: userType;
  }>();
  const [totalComment, setTotalComment] = useState<number>(0);
  const [commentValue, setCommentValue] = useState<comment>({
    content: "",
    sound: soundId!,
    user: info?.id!,
    timestamp: 0,
    parent: "",
    _id: nanoid(),
    replies: []
  });

  useEffect(() => {
    const getSoundData = async (id: string) => {
      const rs = await soundApi.getSound({ page: 1,token:getToken()! }, id);
      setSound(rs.data);
    };

    const getCommentData = async (id: string) => {
      const rs: any = await commentApi.getCommentBySound(
        { token: getToken()! },
        id
      );
      setComment(rs.data);
      setTotalComment(rs.total);
    };

    getSoundData(soundId);
    getCommentData(soundId);
  }, [soundId]);

  const playSound = () => {
    if (audioRef && audioRef.current) {
      audioRef.current.play();
    }
    dispatch(setSoundPlay(sound!));
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
      console.log(sound)
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
      await homeApi.saveRecent({ type: "sound", id: sound._id! });
    }
  };

  const handleClickPlaySound = async () => {
    playOrPauseSound(isPlay, sound!, songId!);

    if (isPlay && sound?._id !== songId) {
      updatePlaylist(sound!);
    }

    await saveRecentSound(sound!, songId!);
  };

  const handleClear = () => {
    setCommentValue({
      content: "",
      sound: soundId!,
      user: info?.id!,
      timestamp: 0,
      parent: "",
      _id: nanoid(),
      replies: []

    });
    setReplyData({ parent: "", user: {} });
  };

  const addReplyToComments = (comments: comment[], newComment: comment, parentId: string): comment[] => {
    return comments.map(comment => {
      if (comment._id === parentId) {
        return {
          ...comment,
          replies: [newComment, ...comment.replies!]
        };
      } else if (comment.replies!.length > 0) {
        return {
          ...comment,
          replies: addReplyToComments(comment.replies!, newComment, parentId)
        };
      }
      return comment;
    });
  };

  const handleCreateComment = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!commentValue.content) return;

    const rs: any = await commentApi.create({
      ...commentValue,
      parent: replyData?.parent ? replyData.parent : undefined,
    });
    if (rs.statusCode == 200) {
      const newComment: comment = {
        ...rs.data,
        user: info,
        replies:[]
      };
      if (replyData?.parent) {
        setComment(prev => addReplyToComments(prev, newComment, replyData.parent));
      } else {
        setComment(prev => [newComment, ...prev]);
      }
      handleClear();
      message.success("Bình luận thành công!");
    }
  };

  const handleReplyClick = (parent: string, user: any) => {
    setReplyData({ parent, user });
    inputRef.current!.focus();
    inputRef.current!.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      <div className="bg-white p-5 rounded mb-5 md:mr-5  ">
        <div className="max-w-[1280px] mx-auto">
          <div className="relative rounded overflow-hidden md:flex">
            <div className="flex-1 flex flex-col justify-between">
              <div className="flex-1">
                <div className="flex items-center w-full">
                  <div
                    onClick={handleClickPlaySound}
                    className="w-10 h-10 flex items-center justify-start cursor-pointer"
                  >
                    {!(songId == sound?._id && isPlay) ? (
                      <Play setColor="#fa3d6a" setHeight="24px" setWidth="24px" />
                    ) : (
                      <div className="relative min-w-8 min-h-8">
                        <MusicWave
                          color="#fa3d6a"
                          classes="h-full w-full bottom-2"
                        />
                      </div>
                    )}
                  </div>
                  <h1 className="flex-1 text-title-sm md:text-title-md font-medium ">
                    {sound?.name}
                  </h1>
                </div>
                <p className="ml-10 text-base flex items-center gap-1">
                  {sound?.hashTag?.map((item, index) => (
                    <span
                      key={index}
                      className="hover:text-primary-100 hover:underline transition-all cursor-pointer"
                    >
                      {item}
                    </span>
                  ))}
                </p>
              </div>
              <div className="flex-1"></div>
              <div className="flex gap-2 items-center md:my-0 my-3">
                <div className="rounded-full w-10 md:w-15 h-10 md:h-15 bg-primary-50/40">
                  <img
                    src={env.apiUrl + "/static/" +sound?.user?.photo}
                    onError={handleImageError}
                    alt={sound?.name}
                    className="w-10 md:w-15 rounded-full h-10 md:h-15"
                  />
                </div>
                <div>
                  <h5 className="font-medium text-base">
                    {sound?.user?.fullName}
                  </h5>
                  {Number(sound?.user?.follower) > 0 && (
                    <p>
                      {formatCountNumber(Number(sound?.user?.follower) || 0)} quan
                      tâm
                    </p>
                  )}
                  <Button
                    onclick={() => { }}
                    title="Quan tâm +"
                    classes="px-3 pb-[2px] bg-primary-100 text-xs text-white rounded"
                  />
                </div>
              </div>
            </div>
            <div className="w-80 h-80 rounded mx-auto">
              <img
                src={env.apiUrl + "/static/" + sound?.photo}
                onError={handleImageError}
                alt={sound?.name}
                className="rounded object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-5 rounded  md:mr-5">
        <div className="grid md:grid-cols-3">
          <div className="col-span-2">
            <div className="flex gap-2 items-center justify-start p-2"></div>
            <form
              onSubmit={handleCreateComment}
              className="mt-2 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-primary-50/40">
                <img
                  src={env.apiUrl+"/static/"+info?.photo}
                  onError={handleImageError}
                  alt={info?.fullName}
                  className="rounded-full"
                />
              </div>
              <div className="flex-1 text-base bg-slate-100 flex items-center rounded px-2">
                {replyData?.parent && (
                  <span className="font-medium text-nowrap mr-2">
                    @{replyData.user.fullName}
                  </span>
                )}
                <input
                  ref={inputRef!}
                  type="text"
                  value={commentValue.content ?? ""}
                  onChange={(e) =>
                    setCommentValue((prev) => ({
                      ...prev,
                      timestamp: audioRef.current?.currentTime!,
                      content: e.target.value,
                    }))
                  }
                  placeholder="Nhập bình luận của bạn"
                  minLength={0}
                  maxLength={100}
                  className="outline-none py-2 w-full bg-slate-100 rounded-md"
                />
                {(commentValue.content || replyData?.parent) && (
                  <IconX
                    onClick={handleClear}
                    strokeWidth={1.5}
                    size={16}
                    className="cursor-pointer"
                  />
                )}
              </div>
              <button
                type="submit"
                className="w-10 h-10 rounded-full border border-primary-100 hover:text-primary-100 flex items-center justify-center cursor-pointer"
              >
                <IconSend2 strokeWidth={1.5} />
              </button>
            </form>
            <div className="flex items-center justify-between mt-4 my-1 ">
              <p>{totalComment.toString()} bình luận</p>

              <div className="flex items-center ">
                <label htmlFor="sort-comment">Sắp xếp theo: </label>
                <select name="" id="sort-comment" className="outline-none">
                  <option value="new-comment">Mới nhất</option>
                  <option value="old-time">Cũ nhất</option>
                  <option value="sound-time">Thời gian phát</option>
                </select>
              </div>
            </div>
            <hr />
            {comment.map((item) => (
              <div key={item._id}>
                <CommentItem
                  comment={item}
                  sound={sound!}
                  replyClick={() => handleReplyClick(item._id!, item.user)}
                />
              </div>
            ))}
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default memo(SoundPage);
