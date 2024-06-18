import { IconSearch } from "@tabler/icons-react";
import React, {
  ChangeEvent,
  startTransition,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";
import { searchData } from "../../utils/types";
import homeApi from "../../api/home.api";
import { getToken } from "../../utils/tokenUtils";
import { createSlug, deepEqual, handleImageError } from "../../utils";
import useQuery from "../../hooks/useQuery";
import { formatCountNumber } from "../../utils/format";
import TrackItem from "../Global/TrackItem";
import { env } from "../../configs/env";

const initialSearchData: searchData = { authors: [], sounds: [] };

const SearchForm = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const keyword = query.get("key");
  const [searchValue, setSearchValue] = useState<string>(keyword ?? "");
  const [showSuggestion, setShowSuggestion] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchData, setSearchData] = useState<searchData>(initialSearchData);

  const debouncedSearchValue = useDebounce(searchValue, 250);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let modifierData: searchData = initialSearchData;
      if (debouncedSearchValue) {
        try {
          const rs = await homeApi.search({
            keyword: debouncedSearchValue.trim(),
            limit: 5,
            token: getToken()!,
          });
          setLoading(false);
          modifierData = {
            authors: rs.data.authors.data,
            sounds: rs.data.sounds.data,
          };
        } catch (error) {
          console.error("Error fetching search data:", error);
        }
      }

      if (!deepEqual(modifierData, searchData)) {
        setSearchData(modifierData);
      }
    };

    fetchData();
  }, [debouncedSearchValue]);

  const handleOnSubmit = (e: any) => {
    e.preventDefault();

    if (searchValue) {
      setShowSuggestion(false);
      startTransition(() => navigate(`/search?key=${searchValue}`));
    }
  };

  return (
    <>
      <form
        onSubmit={handleOnSubmit}
        onFocus={() => setShowSuggestion(true)}
        className={`relative z-999999 rounded-md md:px-3 py-2 flex-1 md:ml-10  flex items-center `}
      >
        <IconSearch className={`${showSuggestion && "text-primary-200"}`} />
        <input
          type="text"
          value={searchValue}
          onChange={handleChange}
          className="outline-none w-full bg-transparent text-black ml-2 "
          placeholder="Tìm kiếm bản nhạc, tác giả ..."
        />
        {showSuggestion && <div className="absolute z-999999 rounded-b left-0 right-0 top-[40px] bg-white">
          {(searchData?.authors?.length! > 0 ||
            searchData?.sounds?.length! > 0) && (
              <div className="p-3 pb-2">
                <hr className="h-[1.5px]" />
                <h4 className="font-medium my-1">Gợi ý kết quả</h4>
                {searchData?.authors?.length! > 0 &&
                  searchData?.authors.map((item) => (
                    <div
                      key={item._id}
                      onClick={()=>navigate(`author/${createSlug(item.fullName||"")}/${item._id}`)}
                      className="flex gap-2 my-1 p-2 hover:bg-primary-50/20 rounded cursor-pointer"
                    >
                      <div className="rounded-full w-14 h-14 bg-primary-50/30">
                        <img
                          src={env.apiUrl + "/static/" +item.photo}
                          alt={item.fullName}
                          onError={handleImageError}
                          className="rounded-full w-14 h-14"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-center">
                        <h6 className="line-clamp-1 overflow-hidden font-medium">
                          {item.fullName}
                        </h6>
                        <span className="text-xs">
                          Producer •
                          <span className="mx-1">
                            {formatCountNumber(Number(item.follower) || 0)}
                          </span>
                          quan tâm
                        </span>
                      </div>
                    </div>
                  ))}
                {searchData?.sounds?.length! > 0 &&
                  searchData?.sounds.map((item) => (
                    <div key={item._id} className="my-1">
                      <TrackItem sound={item} />
                    </div>
                  ))}
              </div>
            )}
          {searchData?.authors?.length! <= 0 &&
            searchData?.sounds?.length! <= 0 &&
            searchValue &&
            !loading && (
              <div className="p-3 ">
                <p className="my-1">Không tìm tháy kết quả phù hợp</p>
              </div>
            )}
          {loading && searchValue && (
            <div className="p-3 ">
              <p className="my-1">Đang tải ...</p>
            </div>
          )}
        </div>}
      </form>
      {showSuggestion && <div onClick={() => setShowSuggestion(false)} className=" absolute z-[99999] left-0 top-0 bottom-0 right-0 h-[calc(100vh-5rem)] w-screen"></div>}

    </>
  );
};

export default SearchForm;
