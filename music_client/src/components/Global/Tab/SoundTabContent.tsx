import React, { useEffect, useRef, useState } from "react";
import { sound } from "../../../utils/types";
import TrackItem from "../TrackItem";
import soundApi from "../../../api/sound.api";
import { useAppSelector } from "../../../hooks/redux";
import { getToken } from "../../../utils/tokenUtils";
import {
    IconCheck,
    IconMusic,
    IconPlaylist,
    IconPlus,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { Popover } from "antd";
import PlayListPop from "../Pop/PlayListPop";
import useQuery from "../../../hooks/useQuery";
import { TabList } from "../../../pages/Library";

const SoundTabContent = () => {

    const query = useQuery();
    const tab = query.get('tab');
    const navigate = useNavigate();
    const uid = useAppSelector((state) => state.auth.userInfo?.id);
    const limit = 20;
    const containerRef = useRef<HTMLDivElement>(null);
    const [sounds, setSounds] = useState<sound[]>([]);
    const [page, setPage] = useState<number>(1);
    const [reachedEnd, setReachedEnd] = useState<boolean>(false);
    const [checked, setChecked] = useState<boolean>(false);
    const [selectSounds, setSelectSounds] = useState<string[]>([]);

    const [visiblePopOver, setVisiblePopOver] = useState(false);

    const hidePopover = () => {
        setVisiblePopOver(false);
    };
    const handleVisibleChange = (newVisible: boolean) => {
        setVisiblePopOver(newVisible);
    };
    const getSoundsData = () => {
        const params = {
            keyword: uid,
            limit,
            page,
            token: getToken()!,
        };
        soundApi.getSoundByOther(params).then((rs: any) => {
            setSounds((prevSounds) => {
                const existingIds = new Set(prevSounds.map(sound => sound._id));
                // Lọc những item từ rs.data mà id của chúng chưa tồn tại trong existingIds
                const newSounds = rs.data.filter((sound: sound) => !existingIds.has(sound._id));
                return [...prevSounds, ...newSounds];
            });
            if (rs.data.length < limit) {
                setReachedEnd(true);
            }
        });
    };

    const handleScroll = () => {
        if (
            containerRef.current &&
            containerRef.current.scrollHeight - containerRef.current.clientHeight ==
            Math.round(containerRef.current.scrollTop)
        ) {
            if (!reachedEnd) {
                setPage((prevPage) => prevPage + 1);
            }
        }
    };

    useEffect(() => {
        if (tab == TabList.MySound)
            getSoundsData();
    }, [page, tab]);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.addEventListener("scroll", handleScroll);
            return () => {
                if (containerRef.current) {
                    containerRef.current.removeEventListener("scroll", handleScroll);
                }
            };
        }
    }, [])


    const handleSelectSound = (id: string) => {
        setSelectSounds((prevSounds) => {
            if (prevSounds.includes(id)) {
                return prevSounds.filter((item) => item !== id);
            } else {
                return [...prevSounds, id];
            }
        });
    };



    return (
        <div
            className="h-full overflow-y-auto overflow-hidden hide-scroll"
            ref={containerRef}
        >
            <div className="flex gap-2 mb-2">
                <div
                    onClick={() => setChecked(!checked)}
                    className="flex items-center justify-start px-2 py-1 cursor-pointer hover:text-primary-50"
                >
                    <div
                        className={`w-6 h-6 rounded flex items-center justify-center border-grey-500/40 border-[1.5px] mr-2 ${checked && "bg-primary-50 font-bold text-white border-primary-50"
                            }`}
                    >
                        <IconCheck strokeWidth={2} size={16} />
                    </div>
                    <h5 className="text-base ">Chọn</h5>
                </div>

                {checked && (
                    <Popover
                        placement="rightTop"
                        content={<PlayListPop data={selectSounds} hidePopover={hidePopover} />}
                        trigger="click"
                        open={visiblePopOver}
                        onOpenChange={handleVisibleChange}

                    >
                        <div className="flex items-center justify-start px-2 py-1 cursor-pointer hover:text-primary-50">
                            <div
                                className={`w-6 h-6 rounded flex items-center justify-center border-grey-500/40 border-[1.5px] mr-2 `}
                            >
                                <IconPlaylist strokeWidth={1.5} size={16} />
                            </div>
                            <h5 className="text-base ">Thêm vào playlist</h5>
                        </div>
                    </Popover>
                )}

                {checked && (
                    <div className="flex items-center justify-start px-2 py-1 cursor-pointer hover:text-primary-50">
                        <div
                            className={`w-6 h-6 rounded flex items-center justify-center border-grey-500/40 border-[1.5px] mr-2 `}
                        >
                            <IconMusic strokeWidth={1.5} size={16} />
                        </div>
                        <h5 className="text-base ">Thêm vào danh sách phát</h5>
                    </div>
                )}

                <div
                    onClick={() => navigate("/upload-sound")}
                    className="flex items-center justify-start px-2 py-1 cursor-pointer hover:text-primary-50"
                >
                    <div className=" w-6 h-6 rounded flex items-center justify-center border-grey-500/40 border-[1.5px] mr-2">
                        <IconPlus strokeWidth={1.5} size={16} />
                    </div>
                    <h5 className="text-base ">Thêm nhạc mới</h5>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 ">
                {sounds.map((item) => (
                    <div key={item._id} className="flex gap-2">
                        {checked && (
                            <input
                                type="checkbox"
                                checked={selectSounds.includes(item._id!)}
                                onChange={() => handleSelectSound(item._id!)}
                            />
                        )}
                        <TrackItem key={item._id} sound={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SoundTabContent;
