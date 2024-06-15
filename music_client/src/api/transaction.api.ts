import { params } from "../utils/types";
import axiosClient from "./axiosClient";

const transactionApi = {
  deposit: (data: { txHash: string }) => {
    const url = "/transition/deposit";
    return axiosClient.post(url, { ...data });
  },
  withDraw: (data: { txHash: string }) => {
    const url = "/transition/withdraw";
    return axiosClient.post(url, { ...data });
  },
  balance: () => {
    const url = "/transition/balance";
    return axiosClient.get(url);
  },
  buySound: (soundId: string) => {
    const url = "/transition/buy-sound";
    return axiosClient.post(url, { soundId });
  },
  getTransactions: (params:params) => {
    const url = "/transition/get-all";
    return axiosClient.get(url, { params });
  },
};

export default transactionApi;
