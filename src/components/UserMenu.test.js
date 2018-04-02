/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import UserMenu from './UserMenu';

const mockData = {
  activeUser: {
    firstName: 'first name',
    lastName: 'last name',
    username: 'username',
  },
  onEditProfileClick: jest.fn(),
  onLogoutClick: jest.fn(),
  disabled: false,
};

describe('<UserMenu />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UserMenu {...mockData} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
