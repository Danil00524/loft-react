import { fetchRouteTaxiFailure, fetchRouteTaxiRequest, fetchRouteTaxiSuccess } from './actions';
import { call, put, takeEvery, fork } from 'redux-saga/effects';
import { handlerRequest } from './api';

function* fetchRouteTaxiWatcher() {
    yield takeEvery(fetchRouteTaxiRequest, handlerRouteTaxi);
}

function* handlerRouteTaxi(action) {
    try {
        const result = yield call(handlerRequest, action.payload.addressFrom, action.payload.addressTo);

        yield put(fetchRouteTaxiSuccess(result));
    } catch(e) {
        yield put(fetchRouteTaxiFailure);
    }
}

export default function* () {
    yield fork(fetchRouteTaxiWatcher);
}
