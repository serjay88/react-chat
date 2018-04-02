/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';

const mockData = {
  signup: jest.fn(),
  login: jest.fn(),
  recieveAuth: jest.fn(),
  isAuthenticated: false,
  error: null,
};

describe('<WelcomePage />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter initialEntries={['/']}>
        <Route path="/(welcome)?" render={props => <WelcomePage {...mockData} {...props} />} />
      </MemoryRouter>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
