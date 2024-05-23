import React, { useEffect, useState } from "react";
import DefaultLayout from "../layout/Layout";
import { Tabs, TabsProps } from "antd";
import homeApi from "../api/home.api";
import RecentSoundItem from "../components/Global/RecentSoundItem";
import { IconTrash } from "@tabler/icons-react";

const History = () => {
  const [sounds, setSounds] = useState<any[]>([]);
  const [playlist, setPlaylist] = useState<any[]>([]);

  const handleGetData = async () => {
    try {
      const rs: any = await homeApi.getAllRecent();

      if (rs.statusCode == 200) {
        const modifierSounds = rs.data.filter((item: any) => item.sound);
        const modifierPlaylist = rs.data.filter((item: any) => item.playlist);
        setSounds(modifierSounds);
        setPlaylist(modifierPlaylist);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

  useEffect(() => {
    console.log(sounds);
  }, [sounds]);

  const handleDelete = (id: string) => {
    try {
      const newSounds = sounds.filter((item) => item._id != id)

      homeApi.deleteRecent(id).then(rs => {
        setSounds(newSounds)

      })
    } catch (error) {
      console.log(error);
    }
  };

  const tabContent = ({ data }: { data: any }) => {




    return (
      <>
        <div className="grid grid-cols-8 gap-4">
          {data.map((item: any, index: number) => (
            <div className="relative">
              <RecentSoundItem key={index} data={item} />
              <div
                onClick={() => handleDelete(item?._id)}
                className="absolute top-1 z-99 right-1 cursor-pointer text-primary-100/70 hover:text-primary-100 hover:font-medium"
              >
                <IconTrash strokeWidth={1.5} size={20} />
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Sound",
      children: tabContent({ data: sounds }),
    },
    {
      key: "2",
      label: "Playlist",
      children: tabContent({ data: playlist }),
    },
  ];
  return (
    <div>
      <DefaultLayout>
        <div className="mr-5 flex-1 h-full">
          <div className="bg-white p-2 pb-5 rounded mb-5 h-full">
            <h3 className="text-title-md w-full px-5 my-5">Nghe gần đây</h3>
            <Tabs tabPosition="left" defaultActiveKey="1" items={items} />
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
};

export default History;
