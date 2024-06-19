import { combineReducers } from 'redux';
import appReducer from './features/appSlice';
import audioReducer from './features/audioSlice';
import authReducer from './features/authSlice';
import loadingReducer from './features/loadingSlice';

const combinedReducer = combineReducers({
  app: appReducer,
  audio: audioReducer,
  auth: authReducer,
  loading: loadingReducer,
});

const rootReducer = (state: ReturnType<typeof combinedReducer> | undefined, action: any) => {
 
  return combinedReducer(state, action);
};

export default rootReducer;
