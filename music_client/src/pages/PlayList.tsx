import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import playlistApi from "../api/playlist.api";
import { getToken } from "../utils/tokenUtils";
import { playlist, sound } from "../utils/types";
import { handleImageError } from "../utils";
import { env } from "../configs/env";
import { format } from "date-fns";
import { formatCountNumber } from "../utils/format";
import Button from "../components/Global/Button";
import { IconArrowsDownUp, IconDots, IconHeart } from "@tabler/icons-react";
import TrackItem from "../components/Global/TrackItem";
import { message } from "antd";

type Props = {};

const PlayListPage = (props: Props) => {
    const { id } = useParams();
    const [playlistData, setPlaylistData] = useState<playlist>();

    useEffect(() => {
        const getPlaylistData = () => {
            playlistApi.read(id!, { token: getToken()! }).then((rs) => {
                setPlaylistData(rs.data);
            });
        };

        if (id) getPlaylistData();
    }, [id]);

    const handleRemoveToAlbum = (soundId: string) => {
        const newPlaylistData: playlist = {
            ...playlistData,
            sounds: playlistData?.sounds?.filter((sound) => sound._id != soundId)
        }
        playlistApi.deleteSoundToPlaylist({ pid: id!, sid: soundId }).then(() => {
            message.success("Xóa thành công!")
        })

        setPlaylistData(newPlaylistData)
    }

    return (
        <>
            <div className="md:mr-5">
                <div className="bg-white p-5 rounded ">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <div className="h-full flex items-center justify-center">
                            <div className="text-center">
                                <img
                                    src={env.apiUrl + "/static/" + (playlistData?.photo || playlistData?.sounds && playlistData?.sounds[0]?.photo)}
                                    alt={playlistData?.title}
                                    onError={handleImageError}
                                    className="max-w-75 w-full lg:min-w-50 rounded shadow object-cover"
                                />
                                <h1 className="text-title-md font-medium my-2">{playlistData?.title}</h1>
                                <p>
                                    Cập nhật:
                                    <span>
                                        {playlistData?.updatedAt
                                            ? format(new Date(playlistData.updatedAt), "dd/MM/yyyy")
                                            : "N/A"}
                                    </span>
                                </p>
                                <p>
                                    Bởi:
                                    <span className="hover:text-primary-100 hover:underline cursor-pointer"> {playlistData?.user?.fullName}</span>
                                </p>
                                {(playlistData?.favourite! > 0) && (
                                    <p>
                                        <span>
                                            {formatCountNumber(playlistData?.favourite!)}
                                        </span>
                                        người yêu thích
                                    </p>
                                )}
                                <Button
                                    title="Phát ngẫu nhiên"
                                    onclick={() => { }}
                                    classes="px-5 py-1 my-3 text-white  font-medium rounded-xl bg-primary-300" />

                                <div className="w-full flex items-center justify-center">
                                    <div className=" flex gap-2 items-center">
                                        <div className="rounded-full bg-grey-200 text-black hover:text-primary-100 p-2 cursor-pointer">
                                            <IconHeart size={20} strokeWidth={1.5} />
                                        </div>
                                        <div className="rounded-full bg-grey-200 text-black hover:text-primary-100 p-2 cursor-pointer">
                                            <IconDots size={20} strokeWidth={1.5} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 h-full overflow-y-scroll overflow-x-hidden hide-scroll">
                            <div className="flex items-center justify-between">
                                <div className="flex gap-1 items-center">
                                    <IconArrowsDownUp size={14} strokeWidth={2} />
                                    <span className="uppercase font-medium text-sm">bài hát</span>
                                </div>
                                <div >
                                    <span className="uppercase font-medium text-sm">Thời gian</span>
                                </div>
                            </div>
                            {playlistData?.sounds?.map((item: sound) => (
                                <div key={item._id} className="my-1">
                                    <TrackItem sound={item} removeToAlbum={() => handleRemoveToAlbum(item._id!)} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PlayListPage;
