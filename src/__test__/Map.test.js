import React from 'react';
import Map from '../views/Map';
import Header from '../components/Header';
import { shallow } from 'enzyme';

describe('login', () => {
    it('check header', () => {
        const wrapper = shallow(<Map />)
        expect(wrapper.contains(<Header />)).toEqual(true);
    })
});
