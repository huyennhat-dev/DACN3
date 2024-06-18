import { params } from "./../utils/types";
import { notify } from "../utils/types";
import axiosClient from "./axiosClient";

const notiApi = {
  read: (id: string) => {
    const url = "/notification/read/" + id;
    return axiosClient.get(url);
  },
  readAll: (params: params) => {
    const url = "/notification/read-all";
    return axiosClient.get(url, { params });
  },
  create: (data: notify) => {
    const url = "/notification/create";
    return axiosClient.post(url, { ...data });
  },
  update: (id: string) => {
    const url = `/notification/update/${id}`;
    return axiosClient.put(url);
  },
};

export default notiApi;
