import { fetchLoginRequest, fetchLoginSuccess, fetchLoginFailure, fetchLogoutRequest } from './actions';

const handlerRequest = (url, method, actionSuccess, payload, store) => {
    fetch(url, {
        method: method,
        headers: {
            "Content-Type": 'application/json;charset=utf-8'
        },
        body: JSON.stringify(payload)
    })
        .then((response) => {
            response.json();
        })
        .then((data) => {
            if (data.success) {
                store.dispatch(actionSuccess(data));
            } else {
                throw data;
            }
        })
        .catch((e) => store.dispatch(fetchLoginFailure(e)));
}

export const authMiddleware = store => next => action => {
    // Прослойка которая может перехватывать все actions.
    // И тем самым изменять их.
    // Имеет доступ к стору до применения и после middleware.
    // И так же имеет ссылку на следующий Middleware, который нужно не забывать вызывать в методе "next" в конце.

    if (action.type === fetchLoginRequest.toString()) {
        handlerRequest('https://loft-taxi.glitch.me/auth', "POST", fetchLoginSuccess, action.payload, store);
    } else if (action.type === fetchLogoutRequest.toString()) {
        handlerRequest('https://loft-taxi.glitch.me/auth', "POST", fetchLogoutRequest, action.payload, store);
    }

    next(action);

    //              ------- EXAMPLE --------
    // console.log(store.getState()) // store до вызова

    // const result = next(action);

    // console.log(store.getState()) // store после вызова

    // return result;
}
