import React, { createContext, memo } from "react";
import {
  IconArrowLeft,
  IconArrowRight,
  IconBrandEdge,
  IconMusic,
  IconTimeline,
} from "@tabler/icons-react";
import { SidebarItem } from "./SideBarItem";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { toggleSideBar } from "../../redux/features/appSlice";
import Logo from "../Icons/Logo";

interface SidebarContextType {
  isOpenSideBar: boolean;
}

export const SidebarContext = createContext<SidebarContextType | undefined>(
  undefined
);

const Sidebar: React.FC = memo(() => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const dispatch = useAppDispatch();
  const isOpenSideBar = useAppSelector((state) => state.app.isOpenSideBar);
  const info = useAppSelector((state) => state.auth.userInfo);

  const handleToggleSideBar = () => {
    dispatch(toggleSideBar(!isOpenSideBar));
  };
  return (
    <aside className="h-full">
      <nav className="h-full flex flex-col bg-white  shadow-sm">
        <div onClick={()=>navigate("/")} className="h-20 p-3 flex justify-center items-center cursor-pointer">
          <Logo isFull={isOpenSideBar} />
        </div>

        <SidebarContext.Provider value={{ isOpenSideBar }}>
          <ul className="flex-1 px-3 py-3">
            {info && <SidebarItem
              title="Thư viện"
              link="/library"
              active={pathname.includes("/library")}
              icon={<IconMusic stroke={1.5} />}
            />}
            <SidebarItem
              title="Khám phá"
              link="/"
              active={pathname == "/"}
              icon={<IconBrandEdge stroke={1.5} />}
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
});

export default Sidebar;
