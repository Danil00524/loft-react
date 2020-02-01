import {
    // fetchLoginRequest,
    fetchLoginSuccess,
    // fetchLoginFailure,
    fetchLogoutRequest,
} from './actions';

const initialState = {
    isLogin: false,
    token: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case fetchLoginSuccess.toString():
            return {
                isLogin: true,
                token: action.payload,
            };
        case fetchLogoutRequest.toString():
            return {
                isLogin: false,
            };

        default:
            return state;
    }
};
