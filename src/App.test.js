import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react'
import configureMockStore from "redux-mock-store";
import { BrowserRouter as Router } from 'react-router-dom';
import "@testing-library/jest-dom/extend-expect";

import App from './App';
import Preloader from './components/Preloader';

const mockStore = configureMockStore();
const store = mockStore({
  auth: {
    isLogin: false,
    token: '',
    isLoading: false,
  },
  bankCard: {
    isLoadingCard: false,
  }
});

describe("App", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Router>
        <App>
          <Preloader />
        </App>
      </Router>
    </Provider>
  );

  it("render app", () => {
    expect(getByTestId("app")).toBeTruthy();
  });
})
