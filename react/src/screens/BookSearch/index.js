import React, { Component } from 'react';
import BookList from '../../components/BookList';
import BookFilters from '../../components/BookFilters';
import 'roboto-npm-webfont';

class BookSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {filterType: 0, filterText: ""};
    this.handleTextFilter = this.handleTextFilter.bind(this);
    this.handleFieldFilter = this.handleFieldFilter.bind(this);
  }
  handleTextFilter(filterText) {
    this.setState({filterText: filterText});
  }
  handleFieldFilter(filterField) {
    this.setState({filterField: filterField});
  }
  render() {
    return (
      <div className="bookSearch">
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

export default BookSearch;
