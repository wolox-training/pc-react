import React, { Component } from 'react';
import {connect} from 'react-redux';

import BookList from '../../components/BookList';
import BookFilters from '../../components/BookFilters';

import './styles.css';

class BookSearch extends Component {

  render() {
    return (
      <div className="book-search">
        <BookFilters />
        <BookList {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books.books,
    filterField: state.books.filters.type,
    filterText: state.books.filters.text
  };
};

export default connect(mapStateToProps)(BookSearch);
