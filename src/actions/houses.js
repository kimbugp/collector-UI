import axios from '.';
import { HOUSES_URL } from './index';

const HousesAction = async (url) => {
  try {
    let res = await axios.get(`${HOUSES_URL}?${url}`)
    return res.data;
  } catch (error) {
    console.log(error)
  }
};

export const createHouse = async (data) => {
  try {
    let res = await axios.post(`${HOUSES_URL}`,data)
    return res;
  } catch (error) {
    console.log(error)
  }
};

export const deleteHouse = async (id) => {
  try {
    let res = await axios.delete(`${HOUSES_URL}${id}`)
    return res;
  } catch (error) {
    console.log(error)
  }
};


export default HousesAction;