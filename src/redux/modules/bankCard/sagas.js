import { call, put, takeEvery, fork } from 'redux-saga/effects'
import {
  fetchPostCardFailure, fetchPostCardRequest, fetchPostCardSuccess, fetchGetCardFailure, fetchGetCardRequest, fetchGetCardSuccess
} from './actions';

import { handlerGetRequest } from './api';
import { handlerRequest } from '../auth/api';

function* fetchBankCardWatcher() {
  yield takeEvery(fetchPostCardRequest, handlerPayment);
  yield takeEvery(fetchGetCardRequest, handlerGetPayment);
}

export function* handlerPayment(action) {
  try {
    const result = yield call(handlerRequest, 'https://loft-taxi.glitch.me/card', "POST", action.payload);
    localStorage.card = JSON.stringify(result);

    yield put(fetchPostCardSuccess(result))
  } catch (e) {
    yield put(fetchPostCardFailure(e));
  }
};

export function* handlerGetPayment(action) {
  try {
    const result = yield call(handlerGetRequest, 'https://loft-taxi.glitch.me/card', action.payload);

    yield put(fetchGetCardSuccess(result))
  } catch (e) {
    yield put(fetchGetCardFailure(e));
  }
};

export default function* () {
  yield fork(fetchBankCardWatcher);
}
