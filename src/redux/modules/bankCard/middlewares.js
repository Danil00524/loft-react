import { fetchCardFailure, fetchCardRequest, fetchCardSuccess } from './actions';
import { handlerRequest } from '../../../helpers/handlerRequest';

export const bankCardMiddleware = store => next => action => {
    if (action.type === fetchCardRequest.toString()) {
        handlerRequest('https://loft-taxi.glitch.me/card', "POST", fetchCardSuccess, fetchCardFailure, action.payload, store);
    }

    return next(action);
}
