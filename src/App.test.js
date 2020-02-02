import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react'
import configureMockStore from "redux-mock-store";
import { BrowserRouter as Router } from 'react-router-dom';
import "@testing-library/jest-dom/extend-expect";

const mockStore = configureMockStore();
const store = mockStore({});

describe("App", () => {
  it("render app", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );

    expect(getByTestId("app")).toBeTruthy();
  });
})
