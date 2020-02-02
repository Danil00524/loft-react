import { combineReducers } from 'redux';
import auth from './auth';
import bankCard from './bankCard';

export default combineReducers({
  auth, bankCard
});
