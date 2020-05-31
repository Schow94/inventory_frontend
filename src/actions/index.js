import axios from 'axios';
import { FETCH_ITEMS, ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from './types';

export const fetchInventory = () => async (dispatch) => {
  let res = await axios.get('http://localhost:5000/items/');
  dispatch({ type: FETCH_ITEMS, payload: res.data });
};

export const addItem = (name, description, quantity) => async (dispatch) => {
  const data = {
    name: name,
    description: description,
    quantity: quantity,
  };

  let res = await axios({
    method: 'post',
    url: 'http://localhost:5000/items/',
    data: data,
  });

  dispatch({
    type: ADD_ITEM,
    payload: res.data,
  });
};

export const deleteItem = (id) => async (dispatch) => {
  let res = await axios({
    method: 'delete',
    url: `http://localhost:5000/items/${id}`,
  });

  dispatch({
    type: DELETE_ITEM,
    payload: id,
  });
};

export const editItem = (id, name, description, quantity) => async (
  dispatch
) => {
  let res = await axios({
    method: 'patch',
    url: `http://localhost:5000/items/${id}`,
    data: {
      name: name,
      description: description,
      quantity: quantity,
    },
  });

  dispatch({
    type: EDIT_ITEM,
    payload: res.data,
  });
};
