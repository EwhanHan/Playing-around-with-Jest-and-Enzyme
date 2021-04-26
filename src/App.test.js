import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('render non-empty component without crashing', () => {
  const wrapper = shallow(<App />);
  // throw new Error('FAIL TEST') //will fail test
  expect(wrapper.exists()).toBe(true)
});
