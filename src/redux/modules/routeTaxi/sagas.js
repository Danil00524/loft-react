import { fetchRouteTaxiFailure, fetchRouteTaxiRequest, fetchRouteTaxiSuccess } from './actions';
import { call, put, takeEvery, fork } from 'redux-saga/effects';
import { handlerRequest } from './api';
