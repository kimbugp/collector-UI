import { TENANTS_URL } from ".";
import axios from 'axios';


export const getTenants = async () => {
    try {
      let res = await axios.get(`${TENANTS_URL}`)
      return res.data;
    } catch (error) {
      console.log(error)
    }
  };
  