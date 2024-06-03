import axios from "axios";
import queryString from "query-string";
import { env } from "../configs/env";
import requiresToken from "../utils/requiresToken";
import { getToken, saveToken } from "../utils/tokenUtils";
import authApi from "./auth.api";
import { message } from "antd";

const axiosClient = axios.create({
  baseURL: env.apiUrl,
  headers: {
    "content-type": "application/json",
  },
  withCredentials: true,
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(
  async (config) => {
    if (requiresToken(config.url!.trim())) {
      const token = getToken();
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const response: any = await authApi.refreshToken();
        const newAccessToken = response.accessToken;
        saveToken(newAccessToken); // Lưu access token mới

        axios.defaults.headers.common["Authorization"] =
          "Bearer " + newAccessToken;
        originalRequest.headers["Authorization"] = "Bearer " + newAccessToken;
        return axiosClient(originalRequest);
      } catch (refreshError: any) {
        if (refreshError.response && refreshError.response.status === 403) {
          message.warning("Phiên đăng nhập hết hạn!");
        }
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
export default axiosClient;
