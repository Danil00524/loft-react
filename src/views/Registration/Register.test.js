import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import "@testing-library/jest-dom/extend-expect";
import configureMockStore from "redux-mock-store";
import { render, fireEvent } from '@testing-library/react';

import { createMemoryHistory } from 'history';

import Registration from './Registration';
import App from '../../App';

const mockStore = configureMockStore();
const store = mockStore({
    auth: {},
    bankCard: {},
    routeTaxi: {},
    addressList: {
        addresses: {}
    },
});


describe("Registration", () => {
    it("render component", () => {
        const history = createMemoryHistory();
        const { container, getByTestId } = render(
            <Provider store={store}>
                <Router history={history}>
                    <Registration />
                </Router>
            </Provider>);

        expect(getByTestId('registration-wrapper')).toBeTruthy();
        expect(container.innerHTML).toMatch('Зарегистрироваться');
    });

    it("input value name, password, email and full name", () => {
        const history = createMemoryHistory();
        const { getByTestId } = render(
            <Provider store={store}>
                <Router history={history}>
                    <Registration />
                </Router>
            </Provider>);

        const name = getByTestId('name');
        const password = getByTestId('password');
        const email = getByTestId('email');
        const fullName = getByTestId('fullName');

        fireEvent.change(name, { target: { value: "Danil" } });
        fireEvent.change(password, { target: { value: "111222" } });
        fireEvent.change(email, { target: { value: "dani@gmail.com" } });
        fireEvent.change(fullName, { target: { value: "Poznyakov Danil" } });

        expect(name.value).toBe('Danil');
        expect(password.value).toBe('111222');
        expect(email.value).toBe('dani@gmail.com');
        expect(fullName.value).toBe('Poznyakov Danil');
    });

    describe('submit register user', () => {
        it('with empty query', () => {
            const requestRegister = jest.fn();
            const history = createMemoryHistory();
            const { getByTestId } = render(
                <Provider store={store}>
                    <Router history={history}>
                        <Registration requestRegister={requestRegister} />
                    </Router>
                </Provider>);

            fireEvent.submit(getByTestId('btn-submit'));
            expect(requestRegister).not.toHaveBeenCalled();
        });
        it('with data inside query', () => {
            const requestRegister = jest.fn();
            const history = createMemoryHistory();
            const { getByTestId } = render(
                <Provider store={store}>
                    <Router history={history}>
                        <Registration requestRegister={requestRegister} />
                    </Router>
                </Provider>);

            const name = getByTestId('name');
            const password = getByTestId('password');
            const email = getByTestId('email');
            const fullName = getByTestId('fullName');
            const btn = getByTestId('btn-submit');

            fireEvent.change(name, { target: { value: "dani@gmail.com" } });
            fireEvent.change(password, { target: { value: "111222" } });
            fireEvent.change(fullName, { target: { value: "Danil Poznyakov" } });
            fireEvent.change(email, { target: { value: "fron@gmail.com" } });
            fireEvent.submit(btn);

            expect(requestRegister).toHaveBeenCalled();
        });
    });
});
