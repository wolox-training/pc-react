import React, { Component } from 'react';
import BookList from './components/BookList';
import BookFilters from './components/BookFilters';
import './styles.css';

class App extends Component {
  state = { filterType: 0, filterText: '' };

  handleTextFilter = (filterText) => this.setState({ filterText });
  handleFieldFilter = (filterField) => this.setState({ filterField });

  render() {
    return (
      <div className="book-search">
        <BookFilters
          filterField={this.state.filterField}
          filterText={this.state.filterText}
          onFilterTextChange={this.handleTextFilter}
          onFilterFieldChange={this.handleFieldFilter}
        />
        <BookList
          filterField={this.state.filterField}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}

export default App;
