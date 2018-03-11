import React from 'react';
import { Provider } from 'react-redux';
import { withStyles } from 'material-ui/styles';
<<<<<<< HEAD
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from '../containers/PrivateRoute';
import ChatPage from '../containers/ChatPage';
import WelcomePage from '../containers/WelcomePage';
import history from '../utils/history';
=======
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import classnames from "classnames";
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import Input from 'material-ui/Input';
import ChatPage from '../containers/ChatPage';
import WelcomePage from '../containers/WelcomePage';
>>>>>>> adb43737d2722afb72795702ae3c506ad885f59d
import configureStore from '../store';

import titleInitials from '../utils/title-initials';

const App = () => (  
  <Provider store={store}>
<<<<<<< HEAD
    <Router history={history}>
      <Switch>
        <Route exact path="/(welcome)?" component={WelcomePage} />
        <PrivateRoute path="/chat" component={ChatPage} />
=======
    <Router>
      <Switch>
        <Route exact path="/(welcome)?" component={WelcomePage} />
        <Route path="/chat" component={ChatPage} />
>>>>>>> adb43737d2722afb72795702ae3c506ad885f59d
        <Redirect to="/" />
      </Switch>
    </Router>
  </Provider>
);

const store = configureStore();

export default App;
