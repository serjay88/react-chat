/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './LoginForm';

const mockData = {
  onSubmit: jest.fn(),
};

describe('<LoginForm />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LoginForm {...mockData} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
