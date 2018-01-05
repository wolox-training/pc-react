import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Dashboard from './screens/Dashboard';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import api from './config/service';

import routes from './constants/routes';
import './styles.css';

class App extends Component {

  componentWillMount(){
    api.setHeader('Authorization', sessionStorage.getItem('Authorization'));
    console.log(sessionStorage.getItem('Authorization'));
  }
  render() {
    return (
      <Router>
        <Switch>
          <AuthenticatedRoute path={routes.SIGNUP()} component={SignUp} isPublicRoute />
          <AuthenticatedRoute path={routes.LOGIN()} component={Login} isPublicRoute />
          <AuthenticatedRoute path={routes.HOME()} component={Dashboard} isPrivateRoute />
        </Switch>
      </Router>
    );
  }
}

export default App;
