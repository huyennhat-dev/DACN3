import React, { FormEvent, useEffect, useRef, useState } from "react";
import { comment, userType } from "../../utils/types";
import { handleImageError } from "../../utils";
import { formatRelativeTime, formatTime } from "../../utils/format";
import { IconSend2 } from "@tabler/icons-react";
import { useAppSelector } from "../../hooks/redux";
import { useAudio } from "../../context/AudioContext";

type Props = {
    comment: comment;

};

const CommentItem = ({ comment }: Props) => {
    const info = useAppSelector((state) => state.auth.userInfo);
    const isUserType = (user: string | userType): user is userType => {
        return (user as userType).photo !== undefined;
    };
 
    return (
        <div
            className={`p-2 my-1 flex gap-2 items-start`}
        >
            <div className="w-10 h-10 rounded-full bg-primary-50/40">
                <img
                    src={isUserType(comment.user) ? comment.user.photo : info?.photo}
                    onError={handleImageError}
                    alt={
                        isUserType(comment.user) ? comment.user?.fullName : info?.fullName
                    }
                />
            </div>
            <div className="flex-1 transition-all expandable">
                <div className="flex justify-between items-center">
                    <p>
                        <span className="font-medium mr-1">
                            {isUserType(comment.user) ? comment.user.fullName : ""}
                        </span>{" "}
                        at
                        <span className="font-medium text-primary-50 ml-2">
                            {formatTime(comment.timestamp)}
                        </span>
                    </p>
                    <p>
                        <span className="text-sm">
                            {comment.createdAt&&formatRelativeTime(comment.createdAt!)||"vừa xong"}
                        </span>
                    </p>
                </div>
                <p className="my-1">{comment.content}</p>
                {/* <div onClick={() => setIsReply(!isReply)} className="cursor-pointer">
                    <p>{isReply ? "Hủy" : "Trả lời"}</p>
                </div>
                {isReply && (
                    <form
                        onSubmit={handleSubmit}
                        className="mt-2 flex items-center gap-3"
                    >
                        <div className="w-10 h-10 rounded-full bg-primary-50/40">
                            <img
                                src={info?.photo}
                                onError={handleImageError}
                                alt={info?.fullName}
                            />
                        </div>
                        <div className="flex-1 text-base ">
                            <input
                                type="text"
                                value={replyValue.content ?? ""}
                                onChange={(e) =>
                                    setReplyValue({
                                        ...replyValue,
                                        timestamp: audioRef.current?.currentTime!,
                                        content: e.target.value,
                                        parent_id:comment._id
                                    })
                                }
                                placeholder="Nhập bình luận của bạn"
                                minLength={0}
                                maxLength={100}
                                className="outline-none p-2 w-full bg-slate-100 rounded-md"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-10 h-10 rounded-full border border-primary-100 hover:text-primary-100 flex items-center justify-center cursor-pointer"
                        >
                            <IconSend2 strokeWidth={1.5} />
                        </button>
                    </form>
                )} */}
            </div>
        </div>
    );
};

export default CommentItem;
