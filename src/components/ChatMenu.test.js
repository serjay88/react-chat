/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import ChatMenu from './ChatMenu';

const mockData = {
  activeUser: {
    isMember: true,
    isCreator: true,
    isChatMember: true,
  },
  disabled: false,
  onLeaveClick: jest.fn(),
  onDeleteClick: jest.fn(),
};

describe('<ChatList />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatMenu {...mockData} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
