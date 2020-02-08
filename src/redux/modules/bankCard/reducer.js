import {
    fetchGetCardFailure,
    fetchGetCardRequest,
    fetchGetCardSuccess,
    fetchPostCardFailure,
    fetchPostCardRequest,
    fetchPostCardSuccess,
} from './actions';

import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

const isLoadingCard = handleActions({
    [fetchPostCardRequest]: () => true,
    [fetchPostCardSuccess]: () => false,
    [fetchPostCardFailure]: () => false,

    [fetchGetCardRequest]: () => true,
    [fetchGetCardFailure]: () => false,
    [fetchGetCardSuccess]: () => false,
}, false);

const statusCard = handleActions({
    [fetchPostCardFailure]: () => false,
    [fetchPostCardSuccess]: () => true,
}, false);

const infoCard = handleActions({
    [fetchGetCardSuccess]: (_state, action) => action.payload,
}, {});

export default combineReducers({
    isLoadingCard,
    statusCard,
    infoCard
});
