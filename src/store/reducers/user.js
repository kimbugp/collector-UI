import { GET_USERS, UPDATE_USERS, LOGIN } from "../../actions/actionTypes";

const initialState = {
    tenants: [],
    user:{}
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                tenants: action.payload
            };
        case UPDATE_USERS:
            state.tenants.unshift(action.payload)
            return state
        case LOGIN:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
}
