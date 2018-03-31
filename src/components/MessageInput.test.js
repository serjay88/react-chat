/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import MessageInput from './MessageInput';

const mockData = {
  showJoinButton: true,
  onJoinButtonClick: jest.fn(),
  sendMessage: jest.fn(),
  disabled: false,
};

describe('<MessageInput />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MessageInput {...mockData} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders input ', () => {
    const tree = renderer.create(<MessageInput {...mockData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders disabled input ', () => {
    const tree = renderer.create(<MessageInput {...mockData} disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders button ', () => {
    const tree = renderer.create(<MessageInput {...mockData} showJoinButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders disabled button', () => {
    const tree = renderer.create(<MessageInput {...mockData} showJoinButton disabled />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
