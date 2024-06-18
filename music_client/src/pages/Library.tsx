import { Tabs, TabsProps } from "antd";
import SoundTabContent from "../components/Global/Tab/SoundTabContent";
import PlaylistTabContent from "../components/Global/Tab/PlaylistTabContent";
import { useNavigate } from "react-router-dom";
import useQuery from "../hooks/useQuery";
import PurchaseTabContent from "../components/Global/Tab/PurchaseTabContent";

// Định nghĩa enum TabList để quản lý các tab một cách rõ ràng
export enum TabList {
  MySound = "my-sound",
  Playlist = "playlist",
  Purchase = "purchase",
}

// Khởi tạo component Library
const Library = () => {
  // Sử dụng custom hook useQuery để lấy các tham số query từ URL
  const query = useQuery();
  // Sử dụng hook useNavigate để điều hướng trang
  const navigate = useNavigate();
  // Lấy giá trị của tham số 'tab' từ URL
  const tab = query.get("tab");

  // Định nghĩa các tab với label, key và nội dung tương ứng
  const items: TabsProps["items"] = [
    {
      label: "Đã mua",
      key: TabList.Purchase,
      children: <PurchaseTabContent />,
    },
    {
      label: "Tải lên",
      key: TabList.MySound,
      children: <SoundTabContent />,
    },
    {
      label: "Playlist",
      key: TabList.Playlist,
      children: <PlaylistTabContent />,
    },
  ];

  // Hàm thay đổi tab và cập nhật URL với tham số query mới
  const changeTab = (newTab: string) => {
    query.set("tab", newTab); // Đặt giá trị mới cho tham số 'tab'
    navigate({ search: query.toString() }); // Điều hướng với URL mới
  };

  return (
    <>
      <div className="my-music md:mr-5 h-full">
        <div className="flex flex-col bg-white p-2 pb-5 rounded mb-5 h-full">
          <h3 className="text-title-md w-full md:px-5 my-3">Thư viện của bạn</h3>
          <Tabs
            onChange={(val) => changeTab(val)}
            className="md:px-5 h-full flex-1 overflow-hidden"
            tabPosition="top"
            defaultActiveKey={tab ?? TabList.Purchase}
            items={items}
          />
        </div>
      </div>
    </>
  );
};

export default Library;
