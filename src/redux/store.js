import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './modules';

export const createAppStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__
                ? window.__REDUX_DEVTOOLS_EXTENSION__()
                : noop => noop,
        )
    );

    sagaMiddleware.run(rootSaga);

    return store;
}
