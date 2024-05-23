import { configureStore } from "@reduxjs/toolkit";
import audioReducer from "./features/audioSlice";
import authReducer from "./features/authSlice";
import loadingReducer from "./features/loadingSlice";

const store = configureStore({
  reducer: {
    audio: audioReducer,
    auth: authReducer,
    loading:loadingReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export { store };
