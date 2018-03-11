import React from 'react';
import { Provider } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from '../containers/PrivateRoute';
import ChatPage from '../containers/ChatPage';
import WelcomePage from '../containers/WelcomePage';
import history from '../utils/history';
import configureStore from '../store';

import titleInitials from '../utils/title-initials';

const App = () => (  
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/(welcome)?" component={WelcomePage} />
        <PrivateRoute path="/chat" component={ChatPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </Provider>
);

const store = configureStore();

export default App;
