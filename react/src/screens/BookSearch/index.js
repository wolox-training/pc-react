import React, { Component } from 'react';

import BookList from '../../components/BookList';
import BookFilters from '../../components/BookFilters';

import './styles.css';

class BookSearch extends Component {

  render() {
    return (
      <div className="book-search">
        <BookFilters />
        <BookList />
      </div>
    );
  }
}

export default BookSearch;
