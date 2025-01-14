import { SET_AUTH_USER } from './actionsTypes';

export const setAuthUser = (user) => ({
  type: SET_AUTH_USER,
  payload: user,
});
