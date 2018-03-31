/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';

jest.mock('./ChatList', () => () => 'ChatList');
jest.mock('./NewChatButton', () => () => 'NewChatButton');

const mockData = {
  chats: {
    active: {},
    my: [],
    all: [],
  },
  createChat: jest.fn(),
  isConnected: true,
};

describe('<Sidebar />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Sidebar {...mockData} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
