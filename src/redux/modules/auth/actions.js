import { createAction } from 'redux-actions';

export const fetchLoginRequest = createAction('FETCH_LOGIN_REQUEST');
export const fetchLoginSuccess = createAction('FETCH_LOGIN_SUCCESS');
export const fetchLoginFailure = createAction('FETCH_LOGIN_FAILURE');

export const fetchLogoutRequest = createAction('FETCH_LOGOUT_REQUEST');
