import ApiError from "~/utils/ApiError";

async function performCRUD(model, action, data) {
  switch (action.toLowerCase()) {
    case "create":
      try {
        const createdRecord = await model.create(data);
        return createdRecord;
      } catch (error) {
        console.log(error);
        return ApiError(`Lỗi khi tạo bản ghi: ${error.message}`);
      }

    case "update":
      try {
        const { id, ...updateData } = data;
        const updatedRecord = await model.findByIdAndUpdate(id, updateData, {
          new: true,
        });
        if (!updatedRecord) {
          return ApiError("Không tìm thấy bản ghi với ID này.");
        }
        return updatedRecord;
      } catch (error) {
        console.log(error);
        return ApiError(`Lỗi khi cập nhật bản ghi: ${error.message}`);
      }

    case "delete":
      try {
        const { id } = data;
        const deletedRecord = await model.findByIdAndDelete(id);
        if (!deletedRecord) {
          return ApiError("Không tìm thấy bản ghi với ID này.");
        }
        return { message: "Xóa bản ghi thành công." };
      } catch (error) {
        console.log(error);
        return ApiError(`Lỗi khi xóa bản ghi: ${error.message}`);
      }

    default:
      return ApiError(`Hành động không hợp lệ: ${action}`);
  }
}

export default performCRUD;
