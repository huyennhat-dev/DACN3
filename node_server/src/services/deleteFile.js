import fs from "fs/promises";

const deleteFile = async (filePath) => {
  try {
    await fs.access(filePath, fs.constants.F_OK);
    await fs.unlink(filePath);
    console.log("Tệp tin đã được xóa thành công:", filePath);
    return true;
  } catch (error) {
    console.error("Đã xảy ra lỗi khi xóa tệp tin:", error);
    return false;
  }
};

export default deleteFile;
