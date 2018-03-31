/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatList from './ChatList';

jest.mock('./ChatListItem', () => ({ chatId }) => `ChatListItem-${chatId}`);

const mockData = {
  chats: [
    {
      _id: '12345',
      title: 'My Chat',
      createdAt: '2018-03-29T20:32:34.303Z',
    },
    {
      _id: '34567',
      title: 'Other chat',
      createdAt: '2018-03-29T20:32:34.303Z',
    },
  ],
  activeChat: {
    _id: '12345',
  },
  disabled: false,
};

describe('<ChatList />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatList {...mockData} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly ', () => {
    const tree = renderer.create(<ChatList {...mockData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
