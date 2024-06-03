import React, { useState } from "react";
import Play from "../Icons/Play";
import { env } from "../../configs/env";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useAudio } from "../../context/AudioContext";
import {
    changeIconPlay,
    setAutoPlay,
    setSoundPlay,
} from "../../redux/features/audioSlice";
import MusicWave from "../Icons/MusicWave";
import { getToken } from "../../utils/tokenUtils";
import homeApi from "../../api/home.api";

const RecentSoundItem = ({ data }: { data: any }) => {
    const dispatch = useAppDispatch();
    const songId = useAppSelector((state) => state.audio.sound._id);
    const { audioRef } = useAudio();
    const isPlay = useAppSelector((state) => state.audio.isPlay);
    const info = useAppSelector((state) => state.auth.userInfo);

    const [isHover, setHover] = useState<boolean>(false);

    const playSound = () => {
        if (audioRef && audioRef.current) {
            audioRef.current.play();
        }
        dispatch(setSoundPlay(data));
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

    const handleClickPlaySound = async () => {

        if (isPlay) {
            if (data.sound._id != songId) playSound();
            else pauseSound();
        } else {
            playSound();
        }
        const token = getToken();

        if (songId != data.sound?._id && token) {
            await homeApi.saveRecent({
                type: data.sound ? "sound" : "playlist",
                id: data.sound ? data.sound?._id! : data.playlist?._id,
            });
        }
    };

    return (
        <div className="text-start">
            <div
                onMouseOver={() => {
                    setHover(true);
                }}
                onMouseOut={() => {
                    setHover(false);
                }}
                className="relative w-full rounded overflow-hidden "
            >
                <img
                    src={env.apiUrl + "/static/" + data.sound?.photo}
                    alt={data.sound?.name}
                    className={`${isHover && "scale-110"
                        } duration-[400ms] ease-in-out w-full h-full object-cover`}
                />

                {(isHover || songId == data.sound?._id) && (
                    <div className="absolute z-1 top-0 right-0 bottom-0 left-0 w-full h-full bg-black/20 flex items-center justify-center duration-300 ease-in-out">
                        <button
                            onClick={handleClickPlaySound}
                            className="absolute hover:bg-white/30 p-2 rounded-xl"
                        >
                            {!(songId == data.sound._id && isPlay) ? (
                                <Play setColor="white" setHeight="20px" setWidth="20px" />
                            ) : (
                                <MusicWave color="#fff" classes="bottom-0 left-[-25%] " />
                            )}
                        </button>
                    </div>
                )}
            </div>
            <h3 className="text-base px-1 font-medium mt-1 line-clamp-2 overflow-hidden">
                {data.sound?.name}
            </h3>
        </div>
    );
};

export default RecentSoundItem;
