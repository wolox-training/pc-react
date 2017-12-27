import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import './App.css';

import BookSearch from './screens/BookSearch';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={BookSearch}/>
        </div>
      </Router>
    )
  }
}

export default App;
