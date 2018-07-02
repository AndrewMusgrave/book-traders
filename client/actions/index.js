import axios from 'axios';
import { AUTH_ERROR } from './types';

const ROOT_URL = 'https://localhost:3000';

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error,
  };
}

export function signupUser({ email, password }) {
  return function(dispatch) {
    axios
      .post(`${ROOT_URL}/signup`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
      })
      .catch(error =>
        dispatch(authError(error.response.data.error)),
      );
  };
}

export function signinUser({ email, password }) {
  return function(dispatch) {
    axios
      .post(`${ROOT_URL}/signin`, { email, password })
      .then(responce => {
        dispatch({ type: AUTH_USER });
        // dispatch({ type: FETCH_USER, payload: responce.data.user });
        localStorage.setItem('token', responce.data.token);
      })
      .catch(() => {
        dispatch(authError('Bad Login Info'));
      });
  };
}

export function signoutUser() {
  localStorage.removeItem('token');

  return function(dispatch) {
    dispatch({ type: UNAUTH_USER });
    // dispatch({ type: RESET_USER });
  };
}
