/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatMessage from './ChatMessage';

const mockData = {
  content: '12345',
  sender: {
    _id: '12345',
    firstName: 'Name',
    lastName: 'Surname',
    username: 'username',
  },
  activeUser: {
    _id: '12345',
  },
  createdAt: '2018-03-29T20:32:34.303Z',
  statusMessage: true,
};

describe('<ChatList />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatMessage {...mockData} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly ', () => {
    const tree = renderer.create(<ChatMessage {...mockData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
