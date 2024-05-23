const getSearchHistory = () => {
  return localStorage.getItem("music_app_search_history");
};

const saveSearchHistory = (value: string) => {
  localStorage.setItem("music_app_search_history", value);
};

const clearSearchHistory = () => {
  localStorage.removeItem("music_app_search_history");
};

const getRecentSound = () => {
  return localStorage.getItem("music_app_recent_sound");
};

const saveRecentSound = (value: string) => {
  localStorage.setItem("music_app_recent_sound", value);
};

const clearRecentSound = () => {
  localStorage.removeItem("music_app_recent_sound");
};

export {
  getSearchHistory,
  saveSearchHistory,
  clearSearchHistory,
  getRecentSound,
  saveRecentSound,
  clearRecentSound,
};
