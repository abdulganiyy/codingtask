import { combineReducers } from "redux";
import userReducer from "./slices/user";

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
