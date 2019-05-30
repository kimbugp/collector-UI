import { TENANTS_URL, USERS_URL } from ".";
import axios from '.';


export const getTenants = async () => {
  try {
    let res = await axios.get(`${TENANTS_URL}`)
    return res.data;
  } catch (error) {
    console.log(error)
  }
};

export const getUsers = async (url) => {
  try {
    let res = await axios.get(`${USERS_URL}?${url}`)
    return res.data;
  } catch (error) {
    console.log(error)
  }
};

