import { ReactNode, startTransition, useCallback, useEffect } from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import Player from "../components/Player";
import PlaylistDrawer from "../components/Global/PlaylistDrawer";
import { setHomeData } from "../redux/features/appSlice";
import { getToken } from "../utils/tokenUtils";
import homeApi from "../api/home.api";
import { useLocation } from "react-router-dom";

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;

  const dispatch = useAppDispatch();

  const songId = useAppSelector((state) => state.audio.sound?._id);

  const getHomeData = useCallback(() => {
    startTransition(() => {
      homeApi.getHome({ token: getToken()! }).then((rs) => {
        dispatch(setHomeData(rs.data));
      });
    });
  }, []);

  useEffect(() => {
    if (pathname == "/") getHomeData();
  }, [pathname]);

  return (
    <>
      <div className="bg-white text-grey-800 cursor-default ">
        <div
          className={`flex ${songId ? "h-[calc(100vh-5rem)]" : "h-screen"
            } overflow-hidden `}
        >
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
