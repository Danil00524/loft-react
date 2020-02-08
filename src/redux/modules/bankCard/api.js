export const handlerGetRequest = (url, token) => {
    return fetch(`${url}?token=${token}`)
        .then(response => {
            const { status, statusText } = response;

            if (status !== 200) {
                throw statusText;
            }

            return response.json();
        })
        .catch(e => console.error(e))
}
