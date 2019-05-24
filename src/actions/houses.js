import axios from 'axios';
import { HOUSES_URL } from './index';

const HousesAction = async () => {
  try {
    let res = await axios.get(`${HOUSES_URL}`)
    return res;
  } catch (error) {
    console.log(error)
  }
};
export default HousesAction;