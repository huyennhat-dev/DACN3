import { params } from "./../utils/types";
import axiosClient from "./axiosClient";

const homeApi = {
  getHome: (params: params) => {
    const url = "/home/index";
    return axiosClient.get(url, { params });
  },
  saveRecent: (data: { type: string; id: string }) => {
    const url = "/history/create";
    return axiosClient.post(url, { ...data });
  },
  getAllRecent: () => {
    const url = "/history";
    return axiosClient.get(url);
  },
  deleteRecent: (id: string) => {
    const url = "/history/delete/" + id;
    return axiosClient.delete(url);
  },
  search: (params: params) => {
    const url = "/home/search";
    return axiosClient.get(url,{params});
  },
};

export default homeApi;
