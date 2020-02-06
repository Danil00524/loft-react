import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import "@testing-library/jest-dom/extend-expect";
import configureMockStore from "redux-mock-store";
import { render, fireEvent } from '@testing-library/react';

import { createMemoryHistory } from 'history';

import App from '../App';

const mockStore = configureMockStore();
const store = mockStore({
    auth: {},
    bankCard: {},
});


describe("full app routing", () => {
    describe("header && login && register", () => {
        it('route map', () => {
            const history = createMemoryHistory();
            const { container, getByText, getByTestId } = render(
                <Provider store={store}>
                    <Router history={history}>
                        <App />
                    </Router>
                </Provider>
            );

            expect(container.innerHTML).toMatch('Карта');
            fireEvent.click(getByText(/Войти/i));
        });

        it('route map-login', () => {
            const history = createMemoryHistory();
            const { container, getByText, getByTestId } = render(
                <Provider store={store}>
                    <Router history={history}>
                        <App />
                    </Router>
                </Provider>
            );
            expect(container.innerHTML).toMatch('Карта');
            fireEvent.click(getByText(/Войти/i));

            expect(container.innerHTML).toMatch('Новый пользоватей?');
            fireEvent.click(getByTestId("registration"));
        })

        it('route map-login-register', () => {
            const history = createMemoryHistory();
            const { container, getByText, getByTestId } = render(
                <Provider store={store}>
                    <Router history={history}>
                        <App />
                    </Router>
                </Provider>
            );

            expect(container.innerHTML).toMatch('Карта');
            fireEvent.click(getByText(/Войти/i));

            expect(container.innerHTML).toMatch('Новый пользоватей?');
            fireEvent.click(getByTestId("registration"));

            expect(container.innerHTML).toMatch('Уже зарегистрирован?');
        });

        it('route profile', () => {
            const history = createMemoryHistory();
            const { container, getByText, getByTestId } = render(
                <Provider store={store}>
                    <Router history={history}>
                        <App />
                    </Router>
                </Provider>
            );

            expect(container.innerHTML).toMatch('Профиль');
            fireEvent.click(getByText(/Профиль/i));

            expect(container.innerHTML).toMatch('Новый пользоватей?');
            fireEvent.click(getByTestId("registration"));

            expect(container.innerHTML).toMatch('Уже зарегистрирован?');
        });
    });
});
