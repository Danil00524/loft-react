export const handlerRequest = (url, methods, payload) => {
    return fetch(url, {
        method: methods,
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(payload)
    })
        .then(response => {
            const { status, statusText } = response;

            if (status !== 200) {
                throw statusText;
            }

            return response.json();
        })
        .then(data => {
            const { success } = data;

            if (!success) {
                throw data;
            }

            return data;
        })
}
