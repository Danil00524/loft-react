import { fetchRouteTaxiFailure, fetchRouteTaxiRequest, fetchRouteTaxiSuccess } from './actions';
import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

const coordinates = handleActions({
    [fetchRouteTaxiSuccess]: (state, action) => action.payload,
}, []);

const isLoadingRoute = handleActions({
    [fetchRouteTaxiFailure]: () => false,
    [fetchRouteTaxiRequest]: () => true,
    [fetchRouteTaxiSuccess]: () => false,
}, false);

const statusRequest = handleActions({
    [fetchRouteTaxiSuccess]: () => true,
    [fetchRouteTaxiRequest]: () => false,
}, false);

export default combineReducers({
    coordinates, isLoadingRoute, statusRequest
});
