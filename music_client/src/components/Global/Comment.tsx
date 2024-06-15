import { comment, sound, userType } from "../../utils/types";
import { handleImageError } from "../../utils";
import { formatRelativeTime, formatTime } from "../../utils/format";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useAudio } from "../../context/AudioContext";
import { changeIconPlay, setSoundPlay } from "../../redux/features/audioSlice";
import { useState } from "react";
import { env } from "../../configs/env";

type Props = {
  comment: comment;
  sound: sound;
  replyClick: () => void;
};

const CommentItem = ({ comment, sound, replyClick }: Props) => {
  const { audioRef } = useAudio();
  const dispatch = useAppDispatch();

  const info = useAppSelector((state) => state.auth.userInfo);
  const isUserType = (user: string | userType): user is userType => {
    return (user as userType).photo !== undefined;
  };

  const [isReply, setIsReply] = useState<boolean>(false);

  const handleSoundTimestampClick = () => {
    dispatch(setSoundPlay(sound));

    if (audioRef.current) {
      audioRef.current!.currentTime = comment.timestamp;
      audioRef.current.play();
      dispatch(changeIconPlay(true));
    }
  };

  const handleReplyClick = () => {
    if (!isReply) replyClick();
    setIsReply(!isReply);
  };

  return (
    <>
      <div
        className={` p-2 my-1 flex gap-2 items-start ${
          comment.parent && "ml-12"
        }`}
      >
        <div className="w-10 h-10 rounded-full bg-primary-50/40">
          <img
            src={
              isUserType(comment.user)
                ? env.apiUrl + "/static/" + comment.user.photo
                : env.apiUrl + "/static/" + info?.photo
            }
            onError={handleImageError}
            alt={
              isUserType(comment.user) ? comment.user?.fullName : info?.fullName
            }
            className="rounded-full"
          />
        </div>
        <div className="flex-1 transition-all expandable">
          <div className="flex justify-between items-center">
            <p>
              <span className="font-medium mr-1">
                {isUserType(comment.user) ? comment.user.fullName : ""}
              </span>
              <span
                onClick={handleSoundTimestampClick}
                className="font-medium text-primary-50 ml-2 text-sm cursor-pointer"
              >
                {formatTime(comment.timestamp)}
              </span>
            </p>
            <p>
              <span className="text-sm">
                {(comment.createdAt &&
                  formatRelativeTime(comment.createdAt!)) ||
                  "vừa xong"}
              </span>
            </p>
          </div>
          <p className="text-sm">
            {comment.parent && isUserType(comment.user) && (
              <span className="font-semibold text-primary-50 mr-1">
                @{comment.user.fullName}
              </span>
            )}
            {comment.content}
          </p>
          <div
            onClick={handleReplyClick}
            className="cursor-pointer font-medium text-sm float-right"
          >
            <p>{isReply ? "Hủy" : "Trả lời"}</p>
          </div>
        </div>
      </div>
      {comment.replies?.length! > 0 &&
        comment.replies?.map((replyItem) => (
          <CommentItem
            key={replyItem._id}
            comment={replyItem}
            sound={sound!}
            replyClick={replyClick}
          />
        ))}
    </>
  );
};

export default CommentItem;
