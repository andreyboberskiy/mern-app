import appReducer from "modules/app/store/reducer";
import { combineReducers } from "redux";
import { authReducer } from "modules/auth/store/reducer";
import { reducer as toastrReducer } from "react-redux-toastr";

export const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  toastr: toastrReducer,
});
