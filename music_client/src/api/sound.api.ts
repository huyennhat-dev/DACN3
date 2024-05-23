import { params, sound, uploadData } from "../utils/types";
import axiosClient from "./axiosClient";

const soundApi = {
  getSound: (params: params, id: string) => {
    const url = `/sound/read/${id}`;
    return axiosClient.get(url, { params });
  },
  create: (data: uploadData) => {
    const url = `/sound/create`;
    return axiosClient.post(url, { ...data });
  },
};

export default soundApi;
