export const handlerRequest = (url) => {
    return fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (!data) {
                throw data;
            }

            return data;
        })
        .catch(e => console.error(e))
}
