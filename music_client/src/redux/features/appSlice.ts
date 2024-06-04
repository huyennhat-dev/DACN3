import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { homeData, sound } from "../../utils/types";

interface appState {
  title: string;
  isOpenSideBar: boolean;
  homeData: homeData | undefined;
}

const initialState: appState = {
  title: "",
  isOpenSideBar: false,
  homeData: undefined,
};

const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    toggleSideBar: (state, action: PayloadAction<boolean>) => {
      state.isOpenSideBar = action.payload;
    },
    setHomeData: (state, action: PayloadAction<homeData>) => {
      state.homeData = action.payload;
    },
  },
});

export const { toggleSideBar, setHomeData } = appSlice.actions;
export default appSlice.reducer;
