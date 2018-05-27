import { ADD_APP_NAME } from '../types';

export function addAppName(name) {
  return {
    type: ADD_APP_NAME,
    payload: name,
  };
}
