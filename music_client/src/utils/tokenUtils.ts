const getToken = () => {
  return localStorage.getItem("music_app_access_token");
};

const saveToken = (token: string) => {
  localStorage.setItem("music_app_access_token", token);
};

const clearToken = () => {
  localStorage.removeItem("music_app_access_token");
};

export { getToken, saveToken, clearToken };
