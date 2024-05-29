import DefaultLayout from "../layout/Layout";
import { Tabs, TabsProps } from "antd";
import SoundTabContent from "../components/Global/SoundTabContent";
import PlaylistTabContent from "../components/Global/PlaylistTabContent";
import { useNavigate } from "react-router-dom";
import useQuery from "../hooks/useQuery";


const Library = () => {

    const query = useQuery();
    const navigate = useNavigate();
    const tab = query.get('tab');

    const items: TabsProps["items"] = [
        {
            label: "Tải lên",
            key: 'my-sound',
            children: <SoundTabContent />,
        },
        {
            label: "Playlist",
            key: 'playlist',
            children: <PlaylistTabContent />
        },
    ];

    const changeTab = (newTab: string) => {
        query.set('tab', newTab);
        navigate({ search: query.toString() });
    };
    return (
        <>
            <DefaultLayout>
                <div className="my-music mr-5 h-full">
                    <div className="flex flex-col bg-white p-2 pb-5 rounded mb-5 h-full">
                        <h3 className="text-title-md w-full px-5 my-3">Thư viện của bạn</h3>
                        <Tabs
                            onChange={(val) => changeTab(val)}
                            className="px-5 h-full flex-1 overflow-hidden"
                            tabPosition="top"
                            defaultActiveKey={tab ?? "my-sound"}
                            items={items}
                        />
                    </div>
                </div>
            </DefaultLayout>
        </>
    );
};

export default Library;
