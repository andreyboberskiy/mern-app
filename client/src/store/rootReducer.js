import appReducer from "modules/app/store/reducer";
import { combineReducers } from "redux";
import { authReducer } from "modules/auth/store/reducer";

export const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
});
