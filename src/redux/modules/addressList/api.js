export const handlerRequest = (url) => {
    return fetch(url)
        .then(response => {
            const { status, statusText } = response;

            if (status !== 200) {
                throw statusText;
            }

            return response.json();
        })
        .then(data => {
            if (!data) {
                throw data;
            }

            return data;
        })
}
