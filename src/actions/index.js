import axios from 'axios';
import { FETCH_ITEMS } from './types';

export const fetchInventory = () => async (dispatch) => {
  let res = await axios.get('http://localhost:5000/items/');
  dispatch({ type: FETCH_ITEMS, payload: res.data });
};
