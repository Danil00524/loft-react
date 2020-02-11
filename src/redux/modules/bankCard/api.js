export const handlerGetRequest = (url, token) => {
    return fetch(`${url}?token=${token}`)
        .then(response => {
            return response.json();
        })
        .catch(e => console.error(e))
}
