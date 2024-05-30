const searchHistoryKey = "music_app_search_history";
const recentKey = "music_app_recent_sound";
const playListKey = "music_app_playlist"

const getSearchHistory = () => {
  return localStorage.getItem(searchHistoryKey);
};

const saveSearchHistory = (value: string) => {
  localStorage.setItem(searchHistoryKey, value);
};

const clearSearchHistory = () => {
  localStorage.removeItem(searchHistoryKey);
};

const getRecentSound = () => {
  return localStorage.getItem(recentKey);
};

const saveRecentSound = (value: string) => {
  localStorage.setItem(recentKey, value);
};

const clearRecentSound = () => {
  localStorage.removeItem(recentKey);
};

const getPlaylist = () => {
  return localStorage.getItem(playListKey);
};

const savePlaylist = (value: string) => {
  localStorage.setItem(playListKey, value);
};

const clearPlaylist = () => {
  localStorage.removeItem(playListKey);
};

export {
  getSearchHistory,
  saveSearchHistory,
  clearSearchHistory,
  getRecentSound,
  saveRecentSound,
  clearRecentSound,
  getPlaylist,
  savePlaylist,
  clearPlaylist,
};
