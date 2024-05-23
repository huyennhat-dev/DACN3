import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface LoadingState {
  isLoading: boolean;
}

const initialState: LoadingState = {
  isLoading: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState: initialState,
  reducers: {
    toggleLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { toggleLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
