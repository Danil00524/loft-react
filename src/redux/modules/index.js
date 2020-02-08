import { fork } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import auth, { sagas as authSagas } from './auth';
import bankCard, { sagas as bankCardSagas } from './bankCard';
import addressList, { sagas as addressListSagas } from './addressList';

export default combineReducers({
  auth, bankCard, addressList
});

export function* rootSaga() {
  yield fork(addressListSagas);
  yield fork(bankCardSagas);
  yield fork(authSagas);
}
