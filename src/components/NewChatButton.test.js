/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import NewChatButton from './NewChatButton';

const mockData = {
  onClick: jest.fn(),
  disabled: false,
};

describe('<NewChatButton />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NewChatButton {...mockData} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
