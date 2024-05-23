import React, { useState } from "react";
import { propTypes } from "../../utils/types";
import { env } from "../../configs/env";
import Previous from "../Icons/Previous";
import Play from "../Icons/Play";
import Next from "../Icons/Next";
import { formatCoin } from "../../utils/format";
import {
  IconDots,
  IconDotsVertical,
  IconGardenCart,
  IconHeart,
} from "@tabler/icons-react";

interface Props {
  _id: string;
  type?: propTypes;
  title: string;
  photo: string;
  hashTag?: string[];
  author?: string;
  price?: number;
}

const PlayListItem = ({
  _id,
  photo,
  title,
  type,
  author,
  price,
  hashTag,
}: Props) => {
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
          src={env.apiUrl + "/static/" + photo}
          alt={title}
          className={`${
            isHover && "scale-110"
          } duration-[400ms] ease-in-out w-full h-full object-cover`}
        />

        {isHover && (
          <div className="absolute z-1 top-0 right-0 bottom-0 left-0 w-full h-full bg-black/20 flex items-center justify-center duration-300 ease-in-out">
            <div className="flex items-center justify-around w-full max-w-xs">
              <button className="hover:bg-white/30 p-2 rounded-xl">
                <Play setColor="white" setHeight="24px" setWidth="24px" />
              </button>
            </div>
          </div>
        )}

        {price! > 0 && (
          <div className="absolute top-2 left-2 z-9 text-[#f8c239] font-medium">
            {formatCoin(price!)}
          </div>
        )}
        {/* <div className="absolute top-2 z-9 right-2 flex gap-2">
                    <button className="text-primary hover:text-[#f8c239]">
                        <IconHeart strokeWidth={1.5} />
                    </button>
                    {(price! > 0) && <button className="text-primary hover:text-[#f8c239]">
                        <IconGardenCart strokeWidth={1.5} />
                    </button>}
                    <button className="text-primary hover:text-[#f8c239]">
                        <IconDotsVertical strokeWidth={1.5} />
                    </button>
                </div> */}
      </div>
      <h3 className="text-base px-1 font-medium mt-1 line-clamp-2 overflow-hidden">
        {title}
      </h3>
      <p className="text-xs px-1  hover:text-primary cursor-pointer hover:underline">
        {author}
      </p>
      <div className="flex gap-1 px-1">
        {hashTag?.map((tag, index) => (
          <p
            key={index}
            className="text-xs hover:text-primary cursor-pointer hover:underline"
          >
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PlayListItem;
