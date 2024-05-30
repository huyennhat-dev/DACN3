import { IconSearch } from "@tabler/icons-react";
import React, {
  ChangeEvent,
  startTransition,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";
import { clearSearchHistory, getSearchHistory, saveSearchHistory } from "../../utils/storage";
import { history } from "../../utils/types";

const SearchForm = () => {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState<string>("");
  const [showSuggestion, setShowSuggestion] = useState<boolean>(false);
  const [searchHistoryData, setSearchHistoryData] = useState<history[]>([]);

  useEffect(() => {
    try {
      let data = JSON.parse(getSearchHistory()!).reverse();
      if (!Array.isArray(data)) {
        saveSearchHistory(JSON.stringify([]))
        data = []
      }
      setSearchHistoryData(data);
    } catch (error) {
      saveSearchHistory(JSON.stringify([]))
    }
  }, []);


  const debouncedSearchValue = useDebounce(searchValue, 200);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (debouncedSearchValue) {
      console.log("Searching for:", debouncedSearchValue);
    }
  }, [debouncedSearchValue]);

  

  const toggleShowSearchSuggestion = () => {
    setTimeout(() => {
      return setShowSuggestion(!showSuggestion);
    }, 150)
  };


  const handleSaveSearchHistory = (history: history) => {
    const data = JSON.parse(getSearchHistory()!)
    const newHistoryData: history[] = [...data];
    newHistoryData.push(history);
    setSearchHistoryData(newHistoryData.reverse())
    saveSearchHistory(JSON.stringify(newHistoryData));
  };

  const handleRemoveHistory = () => {
    setShowSuggestion(true)
    clearSearchHistory();
    setSearchHistoryData([]);
  };

  const handleOnSubmit = (e: any) => {
    e.preventDefault();

    startTransition(() => navigate(`/search?key=${searchValue}`));
  };

  return (
    <>
      <form
        onSubmit={handleOnSubmit}
        onFocus={()=>setShowSuggestion(!showSuggestion)}
        onBlur={toggleShowSearchSuggestion}
        className={`relative rounded-md px-3 py-2  w-150 ml-10 text-primary00 flex items-center ${showSuggestion ? "rounded-b-none ":"bg-prprimary/15 "
          } `}
      >
        <IconSearch className={`${showSuggestion&&'text-primary-200'}`}/>
        <input
          type="text"
          value={searchValue}
          onChange={handleChange}
          className="outline-none w-full bg-transparent text-black ml-2 "
          placeholder="Tìm kiếm bản nhạc, tác giả ..."
        />
        {showSuggestion && (
          <div className="absolute z-999999 rounded-b p-3 left-0 right-0 top-[40px] bg-white">
            <div className="flex items-center justify-between font-medium mb-2">
              <h4 className="">Tìm kiếm gần đây</h4>
              <h4
                onClick={handleRemoveHistory}
                className=" cursor-pointer hover:text-primary-200"
              >
                Xóa
              </h4>
            </div>
          </div>
        )}
      </form>
    </>
  );
};

export default SearchForm;
