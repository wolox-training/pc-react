import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import routes from './constants/routes';
import './styles.css';

import BookSearch from './screens/BookSearch';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={routes.HOME} component={BookSearch}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
