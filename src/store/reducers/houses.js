import { GET_HOUSE } from "../../actions/actionTypes";

const initialState = {
};

export default function housesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_HOUSE:
      return {
        ...state,
        houses: action.payload
      };
    default:
      return state;
  }
}