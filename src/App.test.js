import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const welcome = <h1 id='app'>Welcome to My World!</h1>;
  // expect(wrapper.contains(welcome)).toBe(true);
  expect(wrapper.contains(welcome)).toEqual(true);
});