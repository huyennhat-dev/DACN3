import React from "react";
import { Process, processType } from "../../utils/types";
import { IconTrash } from "@tabler/icons-react";

interface UploadProcessBarProps extends processType {
    onClick: () => void;
}

const UploadProcessBar = ({ name, photo, process, status, onClick }: UploadProcessBarProps) => {
    console.log(process);
    return (
        <div className="flex gap-5 bg-white py-2 px-6 rounded items-center hover:shadow">
            <div className="w-15 h-15 rounded">
                <img
                    src={photo}
                    alt={name}
                    className="w-15 h-15 object-cover rounded"
                />
            </div>
            <div className="text-grey-800  w-full">
                <h5 className="font-medium line-clamp-2 overflow-hidden text-lg">
                    {name}
                </h5>
                <div className="w-full bg-gray-400/70 rounded-full my-1 h-1  dark:bg-gray-700">
                    <div
                        className={`h-1 rounded-full ${(status == Process.Success && "bg-success-400") ||
                            (status == Process.Pending && "bg-primary-50") ||
                            (status == Process.Error && "bg-orange-500")
                            }`}
                        style={{
                            width: `${process}%`,
                            transition: "width 0.5s ease-in-out",
                        }}
                    />
                </div>
                <span
                    className={`text-xs  ${(status == Process.Success && "text-success-400") ||
                        (status == Process.Pending && "text-primary-50") ||
                        (status == Process.Error && "text-orange-500")
                        }`}
                >
                    {(status == Process.Success && "Thành công") ||
                        (status == Process.Pending && "Đang tải...") ||
                        (status == Process.Error && "Có lỗi xảy ra")}
                </span>
            </div>
            <div
                onClick={onClick}
                className="p-3 cursor-pointer hover:text-primary-100">
                <IconTrash size={24} strokeWidth={1.3} />
            </div>
        </div>
    );
};

export default UploadProcessBar;
