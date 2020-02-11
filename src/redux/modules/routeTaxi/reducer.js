import { fetchRouteTaxiFailure, fetchRouteTaxiRequest, fetchRouteTaxiSuccess } from './actions';
import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

const coordinates = handleActions({
    [fetchRouteTaxiSuccess]: (state, action) => action.payload,
}, []);

const isLoading = handleActions({
    [fetchRouteTaxiFailure]: () => false,
    [fetchRouteTaxiRequest]: () => true,
    [fetchRouteTaxiSuccess]: () => false,
}, false);

export default combineReducers({
    coordinates, isLoading
});
