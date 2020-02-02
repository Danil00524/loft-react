export const handlerRequest = (url, methods, actionSuccess, actionFailure, payload, store) => {
    fetch(`${url}`, {
        method: methods,
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(payload)
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (data.success) {
                if (payload.cvc) {
                    store.dispatch(actionSuccess(payload));
                } else {
                    store.dispatch(actionSuccess(data));
                }
            } else {
                throw data;
            }
        })
        .catch((e) => store.dispatch(actionFailure(e)));
}
