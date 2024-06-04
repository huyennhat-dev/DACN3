import { ReactNode } from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import { useAppSelector } from "../hooks/redux";

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const songId = useAppSelector((state) => state.audio.sound._id)

  return (
    <>
      <div className="bg-white text-grey-800 cursor-default ">
        <div className={`flex ${songId ? "h-[calc(100vh-5rem)]" : "h-screen"} overflow-hidden `}>
          <SideBar />
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <Header />
            <main className="h-full mr-6 block py-5 pl-5 rounded-md bg-grey-100 overflow-y-auto overflow-x-hidden">
              {children}
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
