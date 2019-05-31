import { GET_USERS } from "../../actions/actionTypes";

const initialState = {
    tenants:[]
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                tenants: action.payload
            };
        default:
            return state;
    }
}
