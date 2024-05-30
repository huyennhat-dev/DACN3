import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface appState {
  isOpenSideBar: boolean;
}

const initialState: appState = {
    isOpenSideBar: false,
};

const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    toggleSideBar: (state, action: PayloadAction<boolean>) => {
      state.isOpenSideBar = action.payload;
    },
  },
});

export const { toggleSideBar } = appSlice.actions;
export default appSlice.reducer;
