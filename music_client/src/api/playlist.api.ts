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
  delete: (id: string) => {
    const url = `/playlist/delete/${id}`;
    return axiosClient.delete(url);
  },
  update: ({ data, processFunc }: { data: playlist; processFunc?: any }) => {
    const url = `/playlist/update/${data._id}`;
    return axiosClient.put(
      url,
      { ...data },
      { onUploadProgress: processFunc }
    );
  },
  getPlaylistByOther: (params: params) => {
    const url = `/playlist/get-playlist-by-other`;
    return axiosClient.get(url, { params });
  },
};

export default playlistApi;
