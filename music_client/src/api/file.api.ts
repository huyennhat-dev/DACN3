import axiosClient from "./axiosClient";

const fileApi = {
  download: (path: string) => {
    const url = "/file/download/" + path;
    return axiosClient.get(url, {
      responseType: "blob",
    });
  },
};

export default fileApi;
