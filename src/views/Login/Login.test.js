import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import "@testing-library/jest-dom/extend-expect";
import configureMockStore from "redux-mock-store";
import { render, fireEvent } from '@testing-library/react';

import { createMemoryHistory } from 'history';

import Login from './Login';

const mockStore = configureMockStore();
const store = mockStore({
    auth: {},
    bankCard: {},
    routeTaxi: {},
    addressList: {},
});

describe("Login", () => {
    it("render component", () => {
        const history = createMemoryHistory();
        const { container, getByTestId } = render(
            <Provider store={store}>
                <Router history={history}>
                    <Login />
                </Router>
            </Provider>);

        expect(getByTestId('section-wrapper-login')).toBeTruthy();
        expect(container.innerHTML).toMatch('Войти');
    });

    it("input value name, password", () => {
        const history = createMemoryHistory();
        const { getByTestId } = render(
            <Provider store={store}>
                <Router history={history}>
                    <Login />
                </Router>
            </Provider>);

        const name = getByTestId('name');
        const password = getByTestId('password');

        fireEvent.change(name, { target: { value: "Danil" } });
        fireEvent.change(password, { target: { value: "1" } });

        expect(name.value).toBe('Danil');
        expect(password.value).toBe('1');
    });

    describe('submit login user', () => {
        it('with empty query', () => {
            const requestLogin = jest.fn();
            const history = createMemoryHistory();
            const { getByTestId } = render(
                <Provider store={store}>
                    <Router history={history}>
                        <Login requestLogin={requestLogin} />
                    </Router>
                </Provider>);

            fireEvent.submit(getByTestId('btn-submit'));
            expect(requestLogin).not.toHaveBeenCalled();
        });
        it('with data inside query', () => {
            const requestLogin = jest.fn();
            const history = createMemoryHistory();
            const { getByTestId } = render(
                <Provider store={store}>
                    <Router history={history}>
                        <Login requestLogin={requestLogin} />
                    </Router>
                </Provider>);

            const name = getByTestId('name');
            const password = getByTestId('password');
            const btn = getByTestId('btn-submit');

            fireEvent.change(name, { target: { value: "dani@gmail.com" } });
            fireEvent.change(password, { target: { value: "1" } });
            fireEvent.submit(btn);

            expect(requestLogin).toHaveBeenCalled();
        });
    });
});
