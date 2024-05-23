import axios from "axios";
import queryString from "query-string";
import { env } from "../configs/env";
import requiresToken from "../utils/requiresToken";
import { getToken } from "../utils/tokenUtils";

const axiosClient = axios.create({
  baseURL: env.apiUrl,
  headers: {
    "content-type": "application/json",
  },
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
  (error) => {
    return Promise.reject(error);
  }
);
export default axiosClient;
