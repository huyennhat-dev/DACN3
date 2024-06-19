// authSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { clearToken, saveToken } from "../../utils/tokenUtils";
import { jwtDecode } from "jwt-decode";
import { RESET_STATE } from "../actions";

export type UserInfo = {
  id: string;
  photo?: string;
  fullName?: string;
  wallet_address?: string;
};

interface AuthState {
  isLoggedIn: boolean;
  userInfo: UserInfo | null;
  balance: number;
}

const initialState: AuthState = {
  isLoggedIn: false,
  userInfo: null,
  balance: 0,
};

// Async thunks
export const setTokenAsync = createAsyncThunk(
  "auth/setToken",
  async (token: string) => {
    const decodedToken: UserInfo = jwtDecode(token);
    saveToken(token);
    return { token, userInfo: decodedToken };
  }
);

export const logoutAsync = createAsyncThunk("auth/logout", async () => {
  clearToken();
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<{ token: string }>) {
      state.isLoggedIn = true;
      const decodedToken: UserInfo = jwtDecode(action.payload.token);
      state.userInfo = decodedToken;
      saveToken(action.payload.token);
    },
    logout(state) {
      state.isLoggedIn = false;
      state.userInfo = null;
      state.balance = 0;
      clearToken();
    },
    setBalance(state, action: PayloadAction<{ balance: number }>) {
      state.balance = action.payload.balance;
    },
    updateBalance(state, action: PayloadAction<{ balance: number }>) {
      state.balance += action.payload.balance;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        setTokenAsync.fulfilled,
        (
          state,
          action: PayloadAction<{ token: string; userInfo: UserInfo }>
        ) => {
          state.isLoggedIn = true;
          state.userInfo = action.payload.userInfo;
        }
      )
      .addCase(logoutAsync.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.userInfo = null;
      })
      .addCase(RESET_STATE, () => initialState);
  },
});

export const { logout, setToken, setBalance, updateBalance } =
  authSlice.actions;

export default authSlice.reducer;
