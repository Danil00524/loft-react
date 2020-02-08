import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {
  fetchLoginRequest, fetchLoginSuccess, fetchLoginFailure, fetchRegisterRequest,
  fetchRegisterFailure, fetchRegisterSuccess,
} from './modules/auth/actions';
import {
  fetchPostCardFailure, fetchPostCardRequest, fetchPostCardSuccess, fetchGetCardFailure, fetchGetCardRequest, fetchGetCardSuccess
} from './modules/bankCard/actions';

import { handlerGetRequest } from './modules/bankCard/api';
import { handlerRequest } from '../helpers/handlerRequest';

export function* handlerLogin() {
  yield takeEvery(fetchLoginRequest, function* (action) {
    try {
      const result = yield call(handlerRequest, 'https://loft-taxi.glitch.me/auth', "POST", action.payload);

      if (result) {
        const { token } = result;

        localStorage.loftTaxi = JSON.stringify({ token });
        localStorage.card = JSON.stringify({ success: false });
      }

      yield put(fetchLoginSuccess(result));
    } catch (e) {
      yield put(fetchLoginFailure(e));
    }
  });
};

export function* handlerRegistration() {
  yield takeEvery(fetchRegisterRequest, function* (action) {
    try {
      const result = yield call(handlerRequest, 'https://loft-taxi.glitch.me/register', "POST", action.payload);
      if (result) {
        const { token } = result;

        localStorage.loftTaxi = JSON.stringify({ token });
        localStorage.card = JSON.stringify({ success: false });
      }

      yield put(fetchRegisterSuccess(result));
    } catch (e) {
      yield put(fetchRegisterFailure(e));
    }
  });
};

export function* handlerPayment() {
  yield takeEvery(fetchPostCardRequest, function* (action) {
    try {
      const result = yield call(handlerRequest, 'https://loft-taxi.glitch.me/card', "POST", action.payload);
      localStorage.card = JSON.stringify(result);

      yield put(fetchPostCardSuccess(result))
    } catch (e) {
      yield put(fetchPostCardFailure(e));
    }
  });
};

export function* handlerGetPayment() {
  yield takeEvery(fetchGetCardRequest, function* (action) {

    try {
      const result = yield call(handlerGetRequest, 'https://loft-taxi.glitch.me/card', action.payload);

      yield put(fetchGetCardSuccess(result))
    } catch (e) {
      yield put(fetchGetCardFailure(e));
    }
  });
};
