import { GET_USERS, UPDATE_USERS } from "../../actions/actionTypes";

const initialState = {
    tenants: []
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
        default:
            return state;
    }
}
