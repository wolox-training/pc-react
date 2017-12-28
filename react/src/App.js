import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './styles.css';

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
