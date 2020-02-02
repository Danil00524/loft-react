import {
    fetchLoginSuccess,
    fetchLoginFailure,
    fetchRegisterFailure,
    fetchRegisterSuccess,
    logoutAction,
} from './actions';

import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

const isLogin = handleActions({
    [fetchLoginSuccess]: () => true,
    [fetchLoginFailure]: () => false,
    [logoutAction]: () => false,
    [fetchRegisterFailure]: () => false,
    [fetchRegisterSuccess]: () => true,
}, false);

const isLoading = handleActions({
    [fetchRegisterFailure]: () => false,
    [fetchRegisterSuccess]: () => false,
    [fetchLoginSuccess]: () => false,
    [fetchLoginFailure]: () => false,
}, false);

const token = handleActions({
    [fetchRegisterSuccess]: (_state, action) => action.payload.token,
    [fetchLoginSuccess]: (_state, action) => action.payload.token,
    [fetchLoginFailure]: () => '',
}, '');

export default combineReducers({
    isLogin,
    token,
    isLoading,
});

// const initialState = {
//     isLogin: false,
//     token: null,
// }

// export default (state = initialState, action) => {
//     switch (action.type) {
//         case fetchLoginSuccess.toString():
//             return {
//                 isLogin: true,
//                 token: action.payload,
//             };
//         case fetchLogoutRequest.toString():
//             return {
//                 isLogin: false,
//             };

//         default:
//             return state;
//     }
// };
