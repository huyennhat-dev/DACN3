import React, { useEffect, useRef, useState } from "react";
import { playlist } from "../../../utils/types";
import { useAppSelector } from "../../../hooks/redux";
import playlistApi from "../../../api/playlist.api";
import { getToken } from "../../../utils/tokenUtils";
import PlayListItem from "../PlayListItem";
import { IconPlus } from "@tabler/icons-react";
import Button from "../Button";
import ModalComponent from "../../../common/Modal";
import { message } from "antd";
import useQuery from "../../../hooks/useQuery";
import { TabList } from "../../../pages/Library";

const initialData: playlist = {
  title: "",
  status: "private",
};

const PlaylistTabContent = () => {
  const query = useQuery();
  const tab = query.get("tab");

  const [playlist, setPlaylist] = useState<playlist[]>([]);
  const uid = useAppSelector((state) => state.auth.userInfo?.id);
  const containerRef = useRef<HTMLDivElement>(null);

  const [uploadData, setUploadData] = useState<playlist>(initialData);
  const [editData, setEditData] = useState<playlist>(initialData);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);

  const handleCreatePlaylist = () => {
    if (!uploadData.title)
      return message.warning("Tên playlist không được bỏ trống!");

    playlistApi.create({ data: uploadData }).then((rs: any) => {
      message.success(rs.message);
      setPlaylist((prev) => [rs.data, ...prev]);
      setShowModal(false);
    });
  };

  const getPlaylist = () => {
    playlistApi
      .getPlaylistByOther({ keyword: uid, token: getToken()! })
      .then((rs) => {
        setPlaylist(rs.data);
      });
  };

  const handleDelete = (id: string) => {
    playlistApi.delete(id).then(() => {
      setPlaylist(playlist.filter((item) => item._id != id));
    });
  };

  useEffect(() => {
    if (tab == TabList.Playlist) getPlaylist();
  }, [tab]);

  const handleShowEditModal = (playlist: playlist) => {
    setShowEditModal(true);
    setEditData(playlist);
  };

  const handleUpdatePlaylist = async () => {
    if (!editData.title)
      return message.warning("Tên playlist không được bỏ trống!");

    const rs: any = await playlistApi.update({ data: editData });
    if (rs.statusCode == 200) {
      message.success(rs.message);
      const nrs: any = await playlistApi.read(rs.data._id, {
        token: getToken()!,
      });

      setPlaylist((prev) => [
        ...prev.map((item) => {
          if (item._id === rs.data._id) {
            return nrs.data;
          }
          return item;
        }),
      ]);
      setShowEditModal(false);
    }
  };

  return (
    <>
      <div
        className="h-full overflow-y-auto overflow-hidden hide-scroll"
        ref={containerRef}
      >
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-2">
          <div className="relative w-full " style={{ paddingTop: "100%" }}>
            <div
              onClick={() => setShowModal(!showModal)}
              className="absolute cursor-pointer top-0 right-0 left-0 pt-[100%] flex items-center justify-center rounded border-[1.5px]  border-grey-500/40 hover:border-primary-100 hover:text-primary-100"
            >
              <IconPlus
                className="absolute top-[50%] translate-y-[-50%]"
                strokeWidth={1.5}
                size={30}
              />
            </div>
          </div>
          {playlist.map((item, index) => (
            <PlayListItem
              key={item._id || index}
              playlist={item}
              onDelete={() => handleDelete(item._id!)}
              showEditModal={() => handleShowEditModal(item)}
            />
          ))}
        </div>
      </div>

      {showModal && (
        <ModalComponent hideModal={() => setShowModal(!showModal)}>
          <div className="w-full p-2">
            <h5 className="text-xl font-medium w-full text-center my-2 mb-3">
              Tạo playlist mới
            </h5>
            <div className="my-2">
              <input
                type="text"
                name="playlist-name"
                id="playlist-name"
                value={uploadData.title || ""}
                placeholder="Nhập tên playlist"
                onChange={(e) =>
                  setUploadData((prev) => ({ ...prev, title: e.target.value }))
                }
                minLength={1}
                maxLength={100}
                className=" appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="my-2 flex items-center">
              <input
                checked={uploadData.status == "public" ? true : false}
                onChange={(e) =>
                  setUploadData((prev) => ({
                    ...prev,
                    status: e.target.checked ? "public" : "private",
                  }))
                }
                type="checkbox"
                name="status"
                id="status"
                className="mr-2"
              />
              <label htmlFor="status">Công khai playlist</label>
            </div>
            <div className="w-80 text-center mt-3">
              <Button
                title="Tạo mới"
                onclick={handleCreatePlaylist}
                classes=" px-6 py-2 text-white text-sm font-medium rounded bg-primary-300"
              />
            </div>
          </div>
        </ModalComponent>
      )}

      {showEditModal && (
        <ModalComponent hideModal={() => setShowEditModal(!showEditModal)}>
          <div className="w-full p-2">
            <h5 className="text-xl font-medium w-full text-center my-2 mb-3">
              Sửa playlist
            </h5>
            <div className="my-2">
              <input
                type="text"
                name="playlist-name"
                id="playlist-name"
                value={editData.title || ""}
                placeholder="Nhập tên playlist"
                onChange={(e) =>
                  setEditData((prev) => ({ ...prev, title: e.target.value }))
                }
                minLength={1}
                maxLength={100}
                className=" appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="my-2 flex items-center">
              <input
                checked={editData.status == "public" ? true : false}
                onChange={(e) =>
                  setEditData((prev) => ({
                    ...prev,
                    status: e.target.checked ? "public" : "private",
                  }))
                }
                type="checkbox"
                name="status"
                id="status"
                className="mr-2"
              />
              <label htmlFor="status">Công khai playlist</label>
            </div>
            <div className="w-80 text-center mt-3">
              <Button
                title="Cập nhật"
                onclick={handleUpdatePlaylist}
                classes=" px-6 py-2 text-white text-sm font-medium rounded bg-primary-300"
              />
            </div>
          </div>
        </ModalComponent>
      )}
    </>
  );
};

export default PlaylistTabContent;
