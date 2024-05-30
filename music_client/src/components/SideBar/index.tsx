import React, { createContext } from "react";
import {
  IconArrowLeft,
  IconArrowRight,
  IconBrandEdge,
  IconMusic,
  IconTimeline,
} from "@tabler/icons-react";
import { SidebarItem } from "./SideBarItem";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { toggleSideBar } from "../../redux/features/appSlice";

interface SidebarContextType {
  isOpenSideBar: boolean;
}

export const SidebarContext = createContext<SidebarContextType | undefined>(
  undefined
);

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;
  const dispatch = useAppDispatch();
  const isOpenSideBar = useAppSelector((state) => state.app.isOpenSideBar);

  const handleToggleSideBar = () => {
    dispatch(toggleSideBar(!isOpenSideBar));
  };
  return (
    <aside className="h-full">
      <nav className="h-full flex flex-col bg-white  shadow-sm">
        <div className="h-20 p-3 flex justify-center items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${
              isOpenSideBar ? "w-32" : "w-10 h-10"
            } object-cover`}
            alt=""
          />
        </div>

        <SidebarContext.Provider value={{ isOpenSideBar }}>
          <ul className="flex-1 px-3 py-3">
            <SidebarItem
              title="Thư viện"
              link="/library"
              active={pathname.includes("/library")}
              icon={<IconMusic stroke={1.5} />}
            />
            <SidebarItem
              title="Khám phá"
              link="/"
              active={pathname == "/"}
              icon={<IconBrandEdge stroke={1.5} />}
            />
            <SidebarItem
              title="Bảng xếp hạng"
              link="/chart"
              active={pathname == "/chart"}
              icon={<IconTimeline stroke={1.5} />}
            />
          </ul>
        </SidebarContext.Provider>

        <div className=" flex p-3 justify-center items-center">
          <button
            onClick={handleToggleSideBar}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {isOpenSideBar ? <IconArrowLeft /> : <IconArrowRight />}
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
