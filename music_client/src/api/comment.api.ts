import { comment, params } from "../utils/types";
import axiosClient from "./axiosClient";

const commentApi = {
  create: (data: comment) => {
    const url = "/comment/create";
    return axiosClient.post(url, { ...data });
  },
  delete: (id: string) => {
    const url = `/comment/delete/${id}`;
    return axiosClient.delete(url);
  },
  getCommentBySound: (params: params, id: string) => {
    const url = `/comment/get-all/${id}`;
    return axiosClient.get(url, { params });
  },
};

export default commentApi;
