import React, { useState } from "react";
import { playlist } from "../../utils/types";
import { env } from "../../configs/env";
import Play from "../Icons/Play";
import { defaultImg } from "../../assets/images";
import { IconDots, IconX } from "@tabler/icons-react";
import { Popconfirm } from "antd";

const PlayListItem = ({ data, onDelete }: { data: playlist, onDelete?: () => void }) => {
  const [isHover, setHover] = useState<boolean>(false);

  return (
    <div className="text-start">
      <div
        onMouseOver={() => {
          setHover(true);
        }}
        onMouseOut={() => {
          setHover(false);
        }}
        className="relative w-full rounded overflow-hidden "
      >
        <img
          src={data.photo ? (env.apiUrl + "/static/" + data.photo) : defaultImg}
          alt={data.title}
          className={`${isHover && "scale-110"
            } duration-[400ms] ease-in-out w-full h-full object-cover`}
        />

        {isHover && (
          <div className="absolute z-1 top-0 right-0 bottom-0 left-0 w-full h-full bg-black/20 flex items-center justify-center duration-300 ease-in-out">
            <div className="flex items-center justify-around w-full max-w-xs">
              <Popconfirm
                icon={null}
                placement="top"
                title="Xóa playlist này?"
                okText="Xóa "
                cancelText="Hủy"
                onConfirm={onDelete}
              >
                <button className="hover:bg-white/30 p-2 rounded-full">
                  <IconX size={16} color="#fff" />
                </button>
              </Popconfirm>
              <button className="hover:bg-white/30 p-2 rounded-xl">
                <Play setColor="white" setHeight="24px" setWidth="24px" />
              </button>
              <button className="hover:bg-white/30 p-2 rounded-full">
                <IconDots size={16} color="#fff" />
              </button>
            </div>
          </div>
        )}
      </div>
      <h3 className="text-base px-1 font-medium mt-1 line-clamp-2 overflow-hidden">
        {data.title}
      </h3>
      <p className="text-xs px-1  hover:text-primary-100 cursor-pointer hover:underline">
        {data.user?.fullName}
      </p>
    </div>
  );
};

export default PlayListItem;
