import React, { useContext, ReactNode, startTransition } from "react";
import { SidebarContext } from "./index";
import { useNavigate } from "react-router-dom";

interface SidebarItemProps {
  icon: ReactNode;
  title: string;
  link: string;
  active: boolean;
  alert?: boolean;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  title,
  link,
  active,
  alert,
}) => {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("SidebarItem must be used within a Sidebar");
  }

  const { expanded } = context;

  const navigate = useNavigate();

  const handleNavigate = () => {
    startTransition(() => navigate(link));
  };

  return (
    <li
      onClick={handleNavigate}
      className={`relative flex items-center py-2 px-3 my-2 font-medium rounded-md cursor-pointer transition-colors group ${
        active
          ? "bg-primary-50/30 text-primary-300"
          : "hover:bg-primary-50/20 text-gray-800"
      }`}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all text-nowrap ${
          expanded ? "w-52 ml-3" : "w-0 h-0"
        }`}
      >
        {title}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-primary-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`absolute z-99999  shadow-custom text-nowrap left-full rounded-md px-3 py-1 ml-6 bg-white text-primary-400 text-base invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {title}
        </div>
      )}
    </li>
  );
};
