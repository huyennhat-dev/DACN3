import { params } from "./../utils/types";
import axiosClient from "./axiosClient";

const homeApi = {
  getHome: (params: params) => {
    const url = "/home/index";
    return axiosClient.get(url, { params });
  },
};

export default homeApi;
