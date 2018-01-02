import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import BookSearch from '../../screens/BookSearch';
import BookDetail from '../../screens/BookDetail';
import routes from '../../constants/routes';

class Dashboard extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={routes.HOME()} component={BookSearch}/>
          <Route path={routes.DETAIL()} component={BookDetail}/>
          <Route path={routes.LOGIN()} render={() => {return <Redirect to={routes.HOME()} />;}} />
        </Switch>
      </Router>
    );
  }
}

export default Dashboard;
