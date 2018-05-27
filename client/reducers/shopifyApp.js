import { ADD_APP_NAME } from '../types';

const initState = {};

export default function ShopifyAppReducer(
  state = initState,
  action,
) {
  switch (action.type) {
    case ADD_APP_NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
}
