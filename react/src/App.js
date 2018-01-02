import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Dashboard from './screens/Dashboard';

import routes from './constants/routes';
import './styles.css';

const isUserAuthenticated = () => !!sessionStorage.getItem('user_session');

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={routes.SIGNUP()} render={() => { return (!isUserAuthenticated() ?  <SignUp /> : <Redirect to={routes.HOME()} />); }} />
          <Route path={routes.LOGIN()} render={() => { return (!isUserAuthenticated() ?  <Login /> : <Redirect to={routes.HOME()} />); }} />
          <Route path={routes.HOME()} render={() => { return (isUserAuthenticated() ?  <Dashboard /> : <Redirect to={routes.LOGIN()} />); }} />
        </Switch>
      </Router>
    );
  }
}

export default App;
