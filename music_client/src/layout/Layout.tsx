import { ReactNode } from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import { useAppSelector } from "../hooks/redux";
import Player from "../components/Player";
import PlaylistDrawer from "../components/Global/PlaylistDrawer";

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const songId = useAppSelector((state) => state.audio.sound?._id)

  return (
    <>
      <div className="bg-white text-grey-800 cursor-default ">
        <div className={`flex ${songId ? "h-[calc(100vh-5rem)]" : "h-screen"} overflow-hidden `}>
          <div className="hidden md:block">
            <SideBar />
          </div>
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <Header />
            <main className="h-full p-2 md:mr-6 block md:py-5 md:pl-5 md:p-0 rounded-md bg-grey-100 hide-scroll md:show-scroll overflow-y-auto overflow-x-hidden">
              {children}
            </main>
          </div>
        </div>
        <Player />
        <PlaylistDrawer
          classes={`${songId ? "h-[calc(100vh-5rem)]" : "h-screen"}`}
        />
      </div>
    </>
  );
};

export default DefaultLayout;
