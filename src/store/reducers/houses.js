import { GET_HOUSES, ERROR } from "../../actions/actionTypes";

const initialState = {
  houses: []
};

export default function housesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_HOUSES:
      return {
        ...state,
        houses: action.payload
      };
    case ERROR:
      return state

    default:
      return state;
  }
}