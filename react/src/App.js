import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import routes from './constants/routes';

import './styles.css';

import BookSearch from './screens/BookSearch';
import Login from './screens/Login';
import BookDetail from './screens/BookDetail';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={routes.HOME} component={BookSearch}/>
          <Route path="/login" component={Login}/>
          <Route path="/detail/:id(\d+)" component={BookDetail}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
