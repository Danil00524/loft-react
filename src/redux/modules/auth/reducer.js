import {
    fetchLoginRequest,
    fetchRegisterRequest,
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
}, localStorage.loftTaxi ? true : false);

const isLoading = handleActions({
    [fetchRegisterRequest]: () => true,
    [fetchRegisterFailure]: () => false,
    [fetchRegisterSuccess]: () => false,

    [fetchLoginRequest]: () => true,
    [fetchLoginSuccess]: () => false,
    [fetchLoginFailure]: () => false,
}, false);

const token = handleActions({
    [fetchRegisterSuccess]: (_state, action) => action.payload.token,
    [fetchLoginSuccess]: (_state, action) => action.payload.token,
    [fetchLoginFailure]: () => '',
}, '');

const errorMessage = handleActions({
    [fetchLoginFailure]: (state, action) => action.payload.error,
    [fetchRegisterFailure]: (state, action) => action.payload.error,
}, '');



export default combineReducers({
    isLogin,
    token,
    isLoading,
    errorMessage,
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
