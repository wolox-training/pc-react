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

const mapStateToProps = store => {
  return {
    books: store.books.books,
    filterType: store.books.filterType,
    filterText: store.books.filterText
  };
};

export default connect(mapStateToProps)(BookSearch);
