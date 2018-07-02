import {
  AUTH_ERROR,
  AUTH_USER,
  UNAUTH_USER,
} from '../actions/types';

const initState = { error: '', authenticated: false };

export default function ShopifyAppReducer(
  state = initState,
  action,
) {
  switch (action.type) {
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    case AUTH_USER:
      return { ...state, error: '', authenticated: true };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
