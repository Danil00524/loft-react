import { fork } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import auth, { sagas as authSagas } from './auth';
import bankCard, { sagas as bankCardSagas } from './bankCard';
import addressList, { sagas as addressListSagas } from './addressList';
import routeTaxi, { sagas as routeTaxiSagas } from './routeTaxi';

export default combineReducers({
  auth, bankCard, addressList, routeTaxi
});

export function* rootSaga() {
  yield fork(addressListSagas);
  yield fork(bankCardSagas);
  yield fork(authSagas);
  yield fork(routeTaxiSagas);
}
