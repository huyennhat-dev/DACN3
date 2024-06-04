import { startTransition, useCallback, useEffect, useState } from "react";
import DefaultLayout from "../layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import homeApi from "../api/home.api";
import TrackItem from "../components/Global/TrackItem";
import Skeleton from "react-loading-skeleton";
import { getToken } from "../utils/tokenUtils";
import RecentSoundItem from "../components/Global/RecentSoundItem";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import Banner from "../components/Global/Banner";
import { setHomeData } from "../redux/features/appSlice";
import { playlist, sound } from "../utils/types";
import PlayListItem from "../components/Global/PlayListItem";



const HomePage = () => {
  const dispatch = useAppDispatch()
  const userinfo = useAppSelector((state) => state.auth.userInfo)
  const [loading, setLoading] = useState<boolean>(false);

  const homeData = useAppSelector((state) => state.app.homeData)

  const getHomeData = useCallback(() => {
    console.log("start");
    setLoading(true);
    startTransition(() => {
      homeApi
        .getHome({ token: getToken()! })
        .then((rs: any) => {
          setLoading(false);
          dispatch(setHomeData(rs.data))
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    });
  }, []);


  useEffect(() => {
    getHomeData();
  }, []);


  return (
    <>
      <DefaultLayout>
        <div className="mr-5">

          <Banner />

          {(userinfo?.id && homeData && homeData?.recentSounds.items.length > 0) && (
            <div className="bg-white p-2 rounded mb-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-title-md ">{homeData?.recentSounds.title}</h3>
                <Link to="/history" className="text-sm mb-2 hover:text-primary-100">Xem tất cả</Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
                {homeData?.recentSounds.items.map((item: sound | playlist) => (
                  <RecentSoundItem key={item._id} data={item} />
                ))}
              </div>
            </div>
          )}

          {!loading ? (
            homeData &&
            homeData.newSounds.items.length > 0 && (
              <div className="bg-white p-2 rounded mb-5">
                <h3 className="text-title-md mb-2">{homeData.newSounds.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  {homeData.newSounds.items.map((item: any, index: number) => (
                    <TrackItem key={index} sound={item} />
                  ))}
                </div>
              </div>
            )
          ) : (
            <div className="bg-white p-2 rounded">
              <Skeleton width={400} height={30} className="mb-2" />
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2].map(
                  (e: number, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-start px-2 py-1 rounded duration-100 ease-in-out"
                    >
                      <div className=" cursor-pointer rounded mr-2">
                        <Skeleton width={56} height={56} />
                      </div>
                      <div className="w-full">
                        <Skeleton width={"w-full"} height={12} />
                        <Skeleton width={140} height={12} />
                        <Skeleton width={80} height={12} />
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          )}

      
              <div
                className={`bg-white p-2 rounded mb-5`}
              >
                <h3 className="text-title-md mb-2">Album Hot</h3>
                <div className="grid grid-cols-2  md:grid-cols-4 lg:grid-cols-8 gap-5">
                  {homeData?.playlistHot.map((item, i) => (
                    <PlayListItem
                      key={i}
                      data={item}
                    />
                  ))}
                </div>
              </div>
  


        </div>
      </DefaultLayout>
    </>
  );
};

export default HomePage;
