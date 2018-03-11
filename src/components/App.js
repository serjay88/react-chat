import React from 'react';
import { Provider } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import classnames from "classnames";
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import Input from 'material-ui/Input';
import ChatPage from '../containers/ChatPage';
import WelcomePage from '../containers/WelcomePage';
import configureStore from '../store';

import titleInitials from '../utils/title-initials';

const App = () => (  
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/(welcome)?" component={WelcomePage} />
        <Route path="/chat" component={ChatPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </Provider>
);

const store = configureStore();

export default App;
