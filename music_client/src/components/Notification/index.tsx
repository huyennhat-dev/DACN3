import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import { socket } from "../../utils/socket";
import { IconBell } from "@tabler/icons-react";
import { Popover } from "antd";
import { notify } from "../../utils/types";
import notiApi from "../../api/noti.api";
import { nanoid } from "nanoid";
import { formatRelativeTime } from "../../utils/format";

const NotiItem = ({ data, confirmNoti }: { data: notify, confirmNoti: () => void }) => {


    return (
        <div
            onClick={confirmNoti}
            className={`relative my-1 rounded hover:bg-primary-50/20 p-2 cursor-pointer ${!data.active && "bg-grey-500/10"}`}>
            <p className="text-xs line-clamp-1 overflow-hidden font-medium mb-1">{data.content?.title}</p>
            <p className="text-xs">{data.content?.message}</p>
            <p className="text-end text-xs">{data.createdAt ? formatRelativeTime(data.createdAt!) : "Vừa xong"}</p>
            {!data.active && <div className="absolute top-1 right-1 w-3 h-3 rounded-full bg-primary-100"></div>}

        </div>
    );
};


const NotificationComponent = () => {
    const info = useAppSelector((state) => state.auth.userInfo);
    const [notiData, setNotiData] = useState<notify[]>([]);

    useEffect(() => {
        const getNotiData = () => {
            notiApi.readAll({ limit: 10, page: 1 }).then((rs) => {
                setNotiData(rs.data);
            });
        };

        getNotiData();

        if (info) {
            socket.on("connection", () => {
                console.log("Connected to WebSocket server");
            });

            socket.on("new-notify", (newNotify) => {
                setNotiData((prev) => [
                    newNotify,
                    ...prev,
                ]);
            });

            socket.on("disconnect", () => {
                console.log("Disconnected from WebSocket server");
            });
        }

        return () => {
            socket.disconnect();
        };
    }, [info]);

    const handleConfirmNoti = (id: string) => {
        notiApi.update(id).then(() => {
            setNotiData((prev) => ([...prev.map((noti) => {
                return {
                    ...noti,
                    active: noti._id == id ? true : false
                }
            })]))
        })
    }

    return (
        <Popover
            content={
                <div className="max-w-100">
                    {notiData.length > 0 ? notiData.map((noti) => (
                        <NotiItem key={noti._id} data={noti} confirmNoti={() => handleConfirmNoti(noti._id!)} />
                    )) : <div className="w-full h-full text-center">
                        <p>Bạn không có thông báo nào</p>

                    </div>}
                </div>
            }
            placement="bottomRight"
            trigger={"click"}
        >
            <div className="relative w-10 h-10 flex items-center justify-items-center cursor-pointer md:mx-3">
                <IconBell size={24} strokeWidth={1.5} />
                {notiData.filter((noti) => !noti.active).length > 0 && (
                    <div className="absolute top-2 right-4 w-3 h-3 rounded-full bg-primary-100"></div>
                )}
            </div>
        </Popover>
    );
};

export default NotificationComponent;
