import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import BookSearch from '../../screens/BookSearch';
import BookDetail from '../../screens/BookDetail';
import NavBar from '../../components/NavBar';
import routes from '../../constants/routes';

class Dashboard extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route path={routes.HOME()} component={NavBar} />
          <Switch>
            <Route exact path={routes.HOME()} component={BookSearch}/>
            <Route path={routes.DETAIL()} component={BookDetail}/>
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default Dashboard;
