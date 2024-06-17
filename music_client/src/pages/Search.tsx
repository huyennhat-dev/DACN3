import React, { useEffect, useState } from "react";
import useQuery from "../hooks/useQuery";
import homeApi from "../api/home.api";
import { getToken } from "../utils/tokenUtils";
import { searchData } from "../utils/types";
import TrackItem from "../components/Global/TrackItem";
import PlayListItem from "../components/Global/PlayListItem";
import { handleImageError } from "../utils";
import { formatCountdown } from "antd/es/statistic/utils";
import { formatCountNumber } from "../utils/format";
import { env } from "../configs/env";

const initialSearchData: searchData = { authors: [], sounds: [], playlist: [] };

const SearchPage = () => {
  const query = useQuery();
  const keyword = query.get("key");
  const [searchData, setSearchData] = useState<searchData>(initialSearchData);

  useEffect(() => {
    const getSearchData = async () => {
      try {
        const rs = await homeApi.search({
          keyword: keyword!,
          token: getToken()!,
        });
        const modifierData: searchData = {
          authors: rs.data.authors?.data,
          sounds: rs.data.sounds?.data,
          playlist: rs.data.playlist?.data,
        };
        setSearchData(modifierData);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    if (keyword) getSearchData();
  }, [keyword]);

  return (
    <>
      <div className="bg-white p-5 rounded mb-5 md:mr-5">
        <h1 className="text-title-lg font-medium" >Kết quả tìm kiếm</h1>
        {searchData.sounds?.length > 0 && (
          <div>
            <h2 className="my-3 font-medium text-xl">Bản nhạc</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {searchData.sounds?.map((item) => (
                  <TrackItem key={item._id} sound={item} />
              ))}
            </div>
          </div>
        )}
        {searchData.playlist && searchData.playlist.length! > 0 && (
          <div>
            <h2 className="my-3 font-medium text-xl">Playlist/Album</h2>
            <div className="grid grid-cols-3 md:grid-cols-8 gap-2">
              {searchData.playlist?.map((item) => (
                <div key={item._id}>
                  <PlayListItem playlist={item} />
                </div>
              ))}
            </div>
          </div>
        )}
        {searchData.authors?.length > 0 && (
          <div>
            <h2 className="my-3 font-medium text-xl">Nghệ sĩ/Producer</h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-5">
              {searchData.authors?.map((item) => (
                <div key={item._id} className="text-center">
                  <div className="rounded-full w-full  overflow-hidden bg-primary-50/20 cursor-pointer">
                    <img
                      src={env.apiUrl+"/static/"+ item.photo}
                      onError={handleImageError}
                      alt={item.fullName}
                      className="rounded-full w-full  hover:scale-105 transition-all duration-200"
                    />
                  </div>
                  <h5 className="font-medium text-base mt-2">{item.fullName}</h5>
                  <p>{formatCountNumber(Number(item.follower)||0)} quan tâm</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchPage;
