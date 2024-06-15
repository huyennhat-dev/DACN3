import { userType } from "../utils/types";
import axiosClient from "./axiosClient";

const authApi = {
  login: (data: userType) => {
    const url = "/user/login";
    return axiosClient.post(url, { ...data });
  },
  logout: () => {
    const url = "/logout";
    return axiosClient.post(url);
  },
  register: (data: userType) => {
    const url = "/user/sign-up";
    return axiosClient.post(url, { ...data });
  },
  update: (data: any) => {
    const url = "/user/update";
    return axiosClient.put(url, { ...data });
  },
  getUser: (id: string) => {
    const url = "/user/" + id;
    return axiosClient.get(url);
  },
  refreshToken: () => {
    const url = "/user/refresh-token";
    return axiosClient.get(url);
  },
};

export default authApi;
