import { bankCardMiddleware } from './middlewares';

export { default } from './reducer';
export * from './actions';
export const cardMiddleware = [bankCardMiddleware];
