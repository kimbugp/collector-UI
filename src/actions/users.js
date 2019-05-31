import { TENANTS_URL, USERS_URL } from ".";
import axios from '.';
import { GET_USERS, ERROR, UPDATE_USERS } from "./actionTypes";


export const getTenants = async () => {
  try {
    let res = await axios.get(`${TENANTS_URL}`)
    return res.data;
  } catch (error) {
    console.log(error)
  }
};
export const getUsers = (url) => {
  return async dispatch => {
    try {
      let res = await axios.get(`${USERS_URL}?${url}`)
      dispatch({
        type: GET_USERS,
        payload: res.data
      });
    }
    catch (error) {
      dispatch({ ERROR });
      console.log(error)
    }

    return 'done';
  }
}

export const updateUsers = (data) => {
  return async dispatch => {
    try {
      dispatch({
        type: UPDATE_USERS,
        payload: data
      });
    }
    catch (error) {
      dispatch({ ERROR });
      console.log(error)
    }

    return 'done';
  }
}


