import axiosClient from "./axiosClient";

const transactionApi = {
  deposit: (data: { txHash: string }) => {
    const url = "/transition/deposit";
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
};

export default transactionApi;
