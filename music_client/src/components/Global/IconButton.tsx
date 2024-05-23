import React, { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  onClick: () => void;
  className?: string;
}

const IconButton = ({ icon, onClick, className }: Props) => {
  return (
    <div
      onClick={onClick}
      className={` px-3 cursor-pointer py-1 rounded bg-grey-100 hover:bg-primary-300/30  text-primary-300/70 hover:text-primary-300 duration-150 ease-in-out ${className}`}
    >
      {icon}
    </div>
  );
};

export default IconButton;
