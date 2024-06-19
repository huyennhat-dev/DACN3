import { Link } from "react-router-dom";
import TrackItem from "../components/Global/TrackItem";
import RecentSoundItem from "../components/Global/RecentSoundItem";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import Banner from "../components/Global/Banner";
import { playlist, sound } from "../utils/types";
import PlayListItem from "../components/Global/PlayListItem";
import homeApi from "../api/home.api";
import { setHomeData } from "../redux/features/appSlice";

const HomePage = () => {
  const dispatch = useAppDispatch()
  const userinfo = useAppSelector((state) => state.auth.userInfo);
  const homeData = useAppSelector((state) => state.app.homeData);

  const handleDelete = (id: string) => {
    try {
      const newRecentSounds = homeData?.recentSounds.items.filter((item) => item._id != id);
      homeApi.deleteRecent(id).then(() => {
        dispatch(setHomeData({
          ...homeData!, recentSounds: {
            ...homeData?.recentSounds!,
            items: newRecentSounds!
          }
        }))
      });
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <div className="md:mr-5 ">
        <Banner />

        {userinfo?.id &&
          homeData &&
          homeData?.recentSounds.items.length > 0 && (
            <div className="bg-white p-2 rounded mb-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-title-md ">
                  {homeData?.recentSounds.title}
                </h3>
                <Link
                  to="/history"
                  className="text-sm mb-2 hover:text-primary-100"
                >
                  Xem tất cả
                </Link>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-5">
                {homeData?.recentSounds.items.map((item: sound | playlist) => (
                  <RecentSoundItem key={item._id} data={item} onRemove={() => handleDelete(item._id)} />
                ))}
              </div>
            </div>
          )}

        {homeData && homeData.newSounds.items.length > 0 && (
          <div className="bg-white p-2 rounded mb-5">
            <h3 className="text-title-md mb-2">{homeData.newSounds.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {homeData.newSounds.items.map((item: any, index: number) => (
                <TrackItem key={index} sound={item} />
              ))}
            </div>
          </div>
        )}

        {homeData?.hotPlaylist.items.length! > 0 && (
          <div className={`bg-white p-2 rounded mb-5`}>
            <h3 className="text-title-md mb-2">
              {homeData?.hotPlaylist.title}
            </h3>
            <div className="grid grid-cols-2  md:grid-cols-4 lg:grid-cols-8 gap-5">
              {homeData?.hotPlaylist.items.map((item) => (
                <PlayListItem key={item._id} playlist={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
