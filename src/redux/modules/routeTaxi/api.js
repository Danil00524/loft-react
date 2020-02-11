export const handlerRequest = (addressFrom, addressTo) => {
    return fetch(`https://loft-taxi.glitch.me/route?address1=${addressFrom}&address2=${addressTo}`)
        .then(response => {
            const { status, statusText } = response;

            if (status !== 200) {
                throw statusText;
            }

            return response.json();
        })
        .catch(e => console.error(e))
}
