import { loginMiddleware, registerMiddleware } from './middlewares';

export { default } from './reducer';
export * from './actions';
export const authMiddlewares = [loginMiddleware, registerMiddleware];
