import React, { Component } from 'react';
import {connect} from 'react-redux';

import BookItem from './components/BookItem';

import './styles.css';

class BookList extends Component {
  render() {
    const filterText = this.props.filterText;
    const filterType = this.props.filterType;
    return (
      <div className="book-list">
        {
          this.props.books.map((book) => {
            if(
              !filterText ||
              !filterType ||
              book[filterType].toLowerCase().includes(filterText.toLowerCase())
            ){
              return <BookItem key={book.id} {...book} />;
            }
            return null;
          })
        }
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

export default connect(mapStateToProps)(BookList);
