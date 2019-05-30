import axios from 'axios';
import { LOGIN_URL } from './index';

const loginAction = async (data) => {
  try {
    let res = await axios.post(`${LOGIN_URL}${'google-oauth2/'}`, data)
    return res.data;
  } catch (error) {
    console.log(error)
  }
};
export default loginAction;