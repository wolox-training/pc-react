import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import routes from './constants/routes';

import './styles.css';

import BookSearch from './screens/BookSearch';
import Login from './screens/Login';
import BookDetail from './screens/BookDetail';

const Auth = () => {
  const user = sessionStorage.getItem('user_session');
  if(user){
    return  true;
  }
  return false;
};

class Home extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={routes.HOME} component={BookSearch}/>
          <Route path="/detail/:id(\d+)" component={BookDetail}/>
          <Route path={routes.LOGIN} render={() => {return <Redirect to="/" />;}} />
        </Switch>
      </Router>
    );
  }
}



class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" render={() => { return (Auth() ?  <Home /> : (<Fragment><Redirect to="/login" /><Login /></Fragment>)); }} />
        </Switch>
      </Router>
    );
  }
}

export default App;
