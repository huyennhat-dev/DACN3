import React, { useEffect, useId, useState } from "react";
import { playlist } from "../../../utils/types";
import playlistApi from "../../../api/playlist.api";
import { getToken } from "../../../utils/tokenUtils";
import { useAppSelector } from "../../../hooks/redux";
import Button from "../Button";
import { message } from "antd";

const PopItem = ({
  data,
  onChange,
}: {
  data: playlist;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

}) => {
  const id = useId();
  return (
    <li className="flex items-center justify-start gap-2 mb-2 cursor-pointer hover:text-primary-200">
      <input value={data._id} type="radio" name="playlist" id={id} onChange={onChange} />
      <label htmlFor={id}>{data.title}</label>
    </li>
  );
};

const PlayListPop = ({
  data,
  hidePopover
}: {
  data: string[];
  hidePopover: () => void

}) => {
  const [playlist, setPlaylist] = useState<playlist[]>([]);
  const uid = useAppSelector((state) => state.auth.userInfo?.id);
  const [selectPlaylist, setSelectPlaylist] = useState<string>("")
  const getPlaylist = () => {
    playlistApi
      .getPlaylistByOther({ keyword: uid, token: getToken()! })
      .then((rs) => {
        setPlaylist(rs.data);
      });
  };

  useEffect(() => {
    getPlaylist();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectPlaylist(event.target.value)
  };

  const handlePushSoundToPlaylist = () => {

    if (data.length <= 0) return message.warning("Chọn tối thiểu 1 soud!")
    if (!selectPlaylist) return message.warning("Chọn một playlist")

    playlistApi.update({ data: { sounds: data, _id: selectPlaylist } }).then((rs) => {
      message.success("Thêm vào playlist thành công!")
      hidePopover()

    })
  }

  return (
    <>
      <ul className="px-2 py-1">
        {playlist.length <= 0 && (
          <li className="flex items-center justify-start gap-2">
            <span>Chưa có playlist nào</span>
          </li>
        )}
        {playlist?.map((item) => (
          <PopItem key={item._id} data={item} onChange={handleChange} />
        ))}
      </ul>
      {playlist.length > 0 && (
        <Button
          title="Thêm"
          onclick={handlePushSoundToPlaylist}
          classes=" px-6 py-1 text-primary-100 text-sm font-medium rounded border-[1.5px] border-primary-300"
        />
      )}
    </>
  );
};

export default PlayListPop;
