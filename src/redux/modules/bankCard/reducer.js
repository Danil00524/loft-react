import {
    fetchCardFailure,
    fetchCardSuccess,
    fetchCardRequest,
} from './actions';

import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

const isLoadingCard = handleActions({
    [fetchCardRequest]: () => true,
    [fetchCardSuccess]: () => false,
    [fetchCardFailure]: () => false,
}, false);

const statusCard = handleActions({
    [fetchCardFailure]: () => false,
    [fetchCardSuccess]: () => true,
}, false);

const infoCard = handleActions({
    [fetchCardSuccess]: (_state, action) => action.payload,
}, {});

export default combineReducers({
    isLoadingCard,
    statusCard,
    infoCard
});
