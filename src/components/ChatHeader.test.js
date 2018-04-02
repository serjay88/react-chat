/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatHeader from './ChatHeader';

jest.mock('./Avatar', () => () => 'Avatar');
jest.mock('./ChatMenu', () => () => 'ChatMenu');
jest.mock('./UserMenu', () => () => 'UserMenu');

const mockData = {
  activeUser: {
    isMember: true,
    isCreator: true,
    isChatMember: true,
  },
  activeChat: {
    _id: '12345',
    title: 'My Chat',
  },
  messages: [
    {
      chatId: '12345',
      content: 'My message',
      sender: {},
      createdAt: '2018-03-29T20:32:34.303Z',
    },
  ],
  isConnected: true,
  logout: jest.fn(),
  leaveChat: jest.fn(),
  deleteChat: jest.fn(),
  editUser: jest.fn(),
};

describe('<ChatHeader />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatHeader {...mockData} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly ', () => {
    const tree = renderer.create(<ChatHeader {...mockData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
