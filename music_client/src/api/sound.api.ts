import { params, uploadData } from "../utils/types";
import axiosClient from "./axiosClient";

const soundApi = {
  getSound: (params: params, id: string) => {
    const url = `/sound/read/${id}`;
    return axiosClient.get(url, { params });
  },
  create: ({ data, processFunc }: { data: uploadData; processFunc: any }) => {
    const url = `/sound/create`;
    return axiosClient.post(
      url,
      { ...data },
      { onUploadProgress: processFunc }
    );
  },
  getSoundByOther: (params: params) => {
    const url = `/sound/get-sounds-by-other`;
    return axiosClient.get(url, { params });
  },
  getSoundByBuyer: (params: params) => {
    const url = `/sound/get-sounds-by-buyer`;
    return axiosClient.get(url, { params });
  },
};

export default soundApi;
