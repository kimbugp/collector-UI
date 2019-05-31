import { ERROR, NO_ERROR } from "./actionTypes";

export const closeError = (data = false) => {
    return dispatch => {
        if (data === false) {
            dispatch({
                type: NO_ERROR,
                payload: false
            });
        }
        else {
            dispatch({
                type: ERROR,
                payload: true
            });
        }
        return 'done';
    }
}
