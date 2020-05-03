export const handlerRequest = (url, methods, payload) => {
    return fetch(url, {
        method: methods,
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(payload)
    })
        .then(response => response.json())
        .then(data => data)
        .catch(e => console.error(e))
}
