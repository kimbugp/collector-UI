import axios from 'axios';
import { LOGIN_URL,SOCIAL_LOGIN_URL } from './index';
import { LOGIN } from './actionTypes';
import { closeError } from './errors';

export const socialAction = async (data) => {
  try {
    let res = await axios.post(`${SOCIAL_LOGIN_URL}${'google-oauth2/'}`, data)
    return res.data;
  } catch (error) {
    console.log(error)
  }
};
const loginAction = (data) => {
  return async dispatch => {
    try {
      let res = await axios.post(`${LOGIN_URL}`,data)
      dispatch({
        type: LOGIN,
        payload: res.data
      });
    }
    catch (error) {
      closeError()
    }

    return 'done';
  }
};
export default loginAction;