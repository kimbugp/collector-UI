import { combineReducers } from "redux";
import userReducer from "./user";
import housesReducer from "./houses";

const reducers = combineReducers({
  userReducer,
  housesReducer
});

export default reducers;