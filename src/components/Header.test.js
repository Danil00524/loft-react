import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import "@testing-library/jest-dom/extend-expect";
import configureMockStore from "redux-mock-store";
import { render, fireEvent } from '@testing-library/react';

import { createMemoryHistory } from 'history';

import { act, renderHook } from '@testing-library/react-hooks';

import { useAddressList } from '../hooks/useAddressList';
import App from '../App';
import Header from './Header';

const mockStore = configureMockStore();
const store = mockStore({
    auth: {},
    bankCard: {},
    routeTaxi: {},
    allAddress: {
        addresses: null,
    },
    addressList: {
        addresses: {}
    },
    addresses: {},
});


describe("Header", () => {
    const { statusCard, allAddress } = renderHook(useAddressList);
    store.addressList.addresses = allAddress;
    describe("Render items", () => {
        const history = createMemoryHistory();
        const { getByTestId, getByAltText } = render(
            <Provider store={store}>
                <Router history={history}>
                    <Header />
                </Router>
            </Provider>
        );
        const map = getByTestId("map");
        const loginId = getByTestId("loginId");
        const logo = getByAltText("img");

        it("rendered map", () => {
            expect(map).toBeTruthy();
        });

        it("rendered login", () => {
            expect(loginId).toBeTruthy();
        });

        it("rendered logo", () => {
            expect(logo).toBeTruthy();
        });
    });

    describe("rendering/routing with header", () => {
        it('routing for btn login', () => {
            const history = createMemoryHistory();
            const { container, getByText } = render(
                <Provider store={store}>
                    <Router history={history}>
                        <App>
                        </App>
                    </Router>
                </Provider>
            );

            expect(container.innerHTML).toMatch('Войти');

            fireEvent.click(getByText(/Войти/i));

            expect(container.innerHTML).toMatch('Имя пользователя');
        });

        it('routing for btn map', () => {
            const history = createMemoryHistory();
            const { container, getByText } = render(
                <Provider store={store}>
                    <Router history={history}>
                        <App>
                        </App>
                    </Router>
                </Provider>
            );

            fireEvent.click(getByText(/Карта/i));

            expect(container.innerHTML).toMatch('map');
        })

        it('routing for btn map', () => {
            const history = createMemoryHistory();
            const { container, getByText } = render(
                <Provider store={store}>
                    <Router history={history}>
                        <App>
                        </App>
                    </Router>
                </Provider>
            );

            fireEvent.click(getByText(/Профиль/i));

            expect(container.innerHTML).toMatch('section-wrapper-login');
        })

    })
})
