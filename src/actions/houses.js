import axios from '.';
import { HOUSES_URL } from './index';
import { GET_HOUSES, ERROR } from './actionTypes';

const HousesAction = async (url) => async (dispatch) => {
  try {
    let res = await axios.get(`${HOUSES_URL}?${url}`)
    dispatch({
      type: GET_HOUSES,
      payload: res.data
    });
    return res.data;
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.data
    });
    console.log(error)
  }
};

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


export default HousesAction;