import { fetchAddressListFailure, fetchAddressListRequest, fetchAddressListSuccess } from './actions';
import { call, fork, takeEvery, put } from 'redux-saga/effects';
import { handlerRequest } from './api';
import { url } from '../../../constants/mainURL';

function* fetchAddressListWatcher() {
    yield takeEvery(fetchAddressListRequest, handlerAddressList);
}

export function* handlerAddressList(action) {
    try {
        const result = yield call(handlerRequest, `${url}addressList`);
        yield put(fetchAddressListSuccess(result));
    } catch (e) {
        yield put(fetchAddressListFailure(e));
    }
}

export default function* () {
    yield fork(fetchAddressListWatcher);
}
