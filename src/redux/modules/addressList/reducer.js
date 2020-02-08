import {
    fetchAddressListFailure,
    fetchAddressListRequest,
    fetchAddressListSuccess,
} from './actions';

import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const loadingAddressList = handleActions({
    [fetchAddressListRequest]: () => true,
    [fetchAddressListSuccess]: () => false,
    [fetchAddressListFailure]: () => false,
}, false);

const allAddress = handleActions({
    [fetchAddressListSuccess]: (state, action) => action.payload,
}, {});


export default combineReducers({
    loadingAddressList,
    allAddress,
});
