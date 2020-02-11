import { call, put, takeEvery, fork } from 'redux-saga/effects'
import {
  fetchPostCardFailure, fetchPostCardRequest, fetchPostCardSuccess, fetchGetCardFailure, fetchGetCardRequest, fetchGetCardSuccess
} from './actions';

import { handlerGetRequest } from './api';
import { handlerRequest } from '../auth/api';
import { url } from '../../../constants/mainURL';

function* fetchBankCardWatcher() {
  yield takeEvery(fetchPostCardRequest, handlerPayment);
  yield takeEvery(fetchGetCardRequest, handlerGetPayment);
}

export function* handlerPayment(action) {
  try {
    const result = yield call(handlerRequest, `${url}card`, "POST", action.payload);
    localStorage.card = JSON.stringify(result);

    yield put(fetchPostCardSuccess(action.payload))
  } catch (e) {
    yield put(fetchPostCardFailure(e));
  }
};

export function* handlerGetPayment(action) {
  try {
    const result = yield call(handlerGetRequest, `${url}card`, action.payload);

    yield put(fetchGetCardSuccess(result))
  } catch (e) {
    yield put(fetchGetCardFailure(e));
  }
};

export default function* () {
  yield fork(fetchBankCardWatcher);
}
