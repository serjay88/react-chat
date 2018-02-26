import React from 'react';
import { withStyles } from 'material-ui/styles';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import classnames from "classnames";
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import Input from 'material-ui/Input';
import ChatPage from './ChatPage';
import WelcomePage from './WelcomePage';

import titleInitials from '../utils/title-initials';

const App = () => (  
  <Router>
    <Switch>
      <Route exact path="/(welcome)?" component={WelcomePage} />
      <Route path="/chat" component={ChatPage} />
      <Redirect to="/" />
    </Switch>
  </Router>
);


export default App;
