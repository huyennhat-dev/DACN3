const getHistory = () => {
  return localStorage.getItem("music_app_history");
};

const saveHistory = (value: string) => {
  localStorage.setItem("music_app_history", value);
};

const clearHistory = () => {
  localStorage.removeItem("music_app_history");
};

export { getHistory, saveHistory, clearHistory };
