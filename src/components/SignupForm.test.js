/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import SignupForm from './SignupForm';

const mockData = {
  onSubmit: jest.fn(),
};

describe('<SignupForm />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SignupForm {...mockData} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
