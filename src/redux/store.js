import { applyMiddleware, createStore, compose } from 'redux';
import { authMiddleware } from './modules/auth/middlewares';
import rootReducer from './modules/index';

export const createAppStore = () => {
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(authMiddleware),
            // Any other middleware for example:
            // applyMiddleware(logoutMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__
                ? window.__REDUX_DEVTOOLS_EXTENSION__()
                : noop => noop,
        )
    );

    return store;
}

// export default createAppStore;

// state0 ->  reducers -> state1
//              ↑
//            middleware1
//              ↑
//            middleware0
//              ↑
// action ->  store
