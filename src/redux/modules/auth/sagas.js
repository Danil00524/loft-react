import { call, put, takeEvery, fork } from 'redux-saga/effects'
import {
  fetchLoginRequest, fetchLoginSuccess, fetchLoginFailure, fetchRegisterRequest,
  fetchRegisterFailure, fetchRegisterSuccess,
} from './actions';

import { handlerRequest } from './api';

function* fetchAuthWatcher() {
  yield takeEvery(fetchLoginRequest, handlerLogin);
  yield takeEvery(fetchRegisterRequest, handlerRegistration);
}

export function* handlerLogin(action) {
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
};

export function* handlerRegistration(action) {
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
};

export default function* sagas() {
  yield fork(fetchAuthWatcher);
}
