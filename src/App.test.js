import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import Header from './components/Header';

it('renderer shallow', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<Header />)).toEqual(false);
});
