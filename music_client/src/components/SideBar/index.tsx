import React, { createContext, useState } from "react";
import {
    IconArrowLeft,
  IconArrowRight,
  IconBrandEdge,
  IconClock,
  IconCoinBitcoin,
  IconHeart,
  IconMusic,
  IconTimeline,
  IconUpload,
} from "@tabler/icons-react";
import { SidebarItem } from "./SideBarItem";
import { useLocation } from "react-router-dom";

interface SidebarContextType {
  expanded: boolean;
}

export const SidebarContext = createContext<SidebarContextType | undefined>(
  undefined
);

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-full">
      <nav className="h-full flex flex-col bg-white  shadow-sm">
        <div className="h-20 p-3 flex justify-center items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-10 h-10"
            } object-cover` }
            alt=""
          />
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3 py-3">
            <SidebarItem
              title="Thư viện"
              link="/mymusic"
              active={pathname == "/mymusic"}
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
            <SidebarItem
              title="Yêu thích"
              link="/wishlist"
              active={pathname == "/wishlist"}
              icon={<IconHeart stroke={1.5} />}
            />
            <SidebarItem
              title="Nghe gần đây"
              link="/history"
              active={pathname == "/history"}
              icon={<IconClock stroke={1.5} />}
            />
               <SidebarItem
              title="Đăng bản nhạc"
              link="/upload-sound"
              active={pathname == "/upload-sound"}
              icon={<IconUpload stroke={1.5} />}
            />
          </ul>
        </SidebarContext.Provider>
        

        <div className=" flex p-3 justify-center items-center">
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <IconArrowLeft /> : <IconArrowRight />}
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
