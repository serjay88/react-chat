/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import ErrorMessage from './ErrorMessage';

const mockData = {
  error: new Error('Important Error'),
};

describe('<ErrorMessage />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ErrorMessage {...mockData} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
