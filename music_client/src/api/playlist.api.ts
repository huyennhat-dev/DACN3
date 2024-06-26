import { params, playlist } from "../utils/types";
import axiosClient from "./axiosClient";

const playlistApi = {
  create: ({ data, processFunc }: { data: playlist; processFunc?: any }) => {
    const url = `/playlist/create`;
    return axiosClient.post(
      url,
      { ...data },
      { onUploadProgress: processFunc }
    );
  },
  read: (id: string, params: params) => {
    const url = `/playlist/read/${id}`;
    return axiosClient.get(url, { params });
  },
  update: ({ data, processFunc }: { data: playlist; processFunc?: any }) => {
    const url = `/playlist/update/${data._id}`;
    return axiosClient.put(url, { ...data }, { onUploadProgress: processFunc });
  },
  delete: (id: string) => {
    const url = `/playlist/delete/${id}`;
    return axiosClient.delete(url);
  },
  deleteSoundToPlaylist: ({ sid, pid }: { sid: string; pid: string }) => {
    const url = `/playlist/delete-sound/${pid}-${sid}`;
    return axiosClient.delete(url);
  },
  getPlaylistByOther: (params: params) => {
    const url = `/playlist/get-playlist-by-other`;
    return axiosClient.get(url, { params });
  },
};

export default playlistApi;
