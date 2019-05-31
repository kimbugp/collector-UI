import axios from '.';
import { HOUSES_URL } from './index';
import { GET_HOUSES } from './actionTypes'
import { closeError } from './errors';

const getHouses = (url) => {
  return async dispatch => {
    try {
      let res = await axios.get(`${HOUSES_URL}?${url}`)
      dispatch({
        type: GET_HOUSES,
        payload: res.data
      });
    }
    catch (error) {
      closeError()
    }

    return 'done';
  }
}

export const createHouse = async (data) => {
  try {
    let res = await axios.post(`${HOUSES_URL}`, data)
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


export default getHouses;