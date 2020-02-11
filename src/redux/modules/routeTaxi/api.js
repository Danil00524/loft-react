import { url } from '../../../constants/mainURL';

export const handlerRequest = (addressFrom, addressTo) => {
    return fetch(`${url}route?address1=${addressFrom}&address2=${addressTo}`)
        .then(response => {
            return response.json();
        })
        .catch(e => console.error(e))
}
