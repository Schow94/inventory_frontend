import {
  FETCH_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  EDIT_ITEM,
} from '../actions/types';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEMS:
      return [...state, ...action.payload];
    case ADD_ITEM:
      console.log(action.payload);
      return [...state, action.payload];

    case DELETE_ITEM:
      return state.filter((val) => val.id !== action.payload);

    case EDIT_ITEM:
      return state.map((val) =>
        val.id === action.payload.id ? action.payload : val
      );
    default:
      return state;
  }
}
