import { combineReducers } from "redux";
import userReducer from "./user";
import housesReducer from "./houses";
import { ERROR, NO_ERROR } from "../../actions/actionTypes";

const initialState = {
  view: true
};
function errorReducer(state = initialState, action) {
  switch (action.type) {
    case ERROR:
      return {
        ...state,
        view: true
      };
    case NO_ERROR:
      return {
        ...state,
        view: false
      };
    default:
      return state;
  }
}

const reducers = combineReducers({
  userReducer,
  housesReducer,
  errorReducer
});

export default reducers;