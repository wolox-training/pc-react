import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './styles.css';

import BookSearch from './screens/BookSearch';
import BookDetail from './screens/BookDetail';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={BookSearch}/>
          <Route path="/detail/:id(\d+)" component={BookDetail}/>
        </div>
      </Router>
    )
  }
}

export default App;
