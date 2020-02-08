import { combineReducers } from 'redux';
import auth from './auth';
import bankCard from './bankCard';
import addressList from './addressList';

export default combineReducers({
  auth, bankCard, addressList
});
