import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import BookSearch from './screens/BookSearch';
import BookDetail from './screens/BookDetail';
import routes from './constants/routes';
import './styles.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={routes.HOME()} component={BookSearch}/>
          <Route path={routes.DETAIL()} component={BookDetail}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
