import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules';
import { handlerLogin, handlerRegistration, handlerPayment, handlerGetPayment } from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const createAppStore = () => {
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__
                ? window.__REDUX_DEVTOOLS_EXTENSION__()
                : noop => noop,
        )
    );

    sagaMiddleware.run(handlerLogin);
    sagaMiddleware.run(handlerRegistration);
    sagaMiddleware.run(handlerPayment);
    sagaMiddleware.run(handlerGetPayment);

    return store;
}
