import { createAction } from 'redux-actions';

export const fetchRouteTaxiRequest = createAction('FETCH_ROUTE_TAXI_REQUEST');
export const fetchRouteTaxiSuccess = createAction('FETCH_ROUTE_TAXI_SUCCESS');
export const fetchRouteTaxiFailure = createAction('FETCH_ROUTE_TAXI_FAILURE');
