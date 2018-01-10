import React, { Component } from 'react';

import BookItem from './components/BookItem';
// import {getBooks} from '../../services/books';

import './styles.css';

class BookList extends Component {
  render() {
    const filterText = this.props.filterText;
    const filterField = this.props.filterField;
    return (
      <div className="book-list">
        {
          this.props.books.map((book) => {
            if(
              !filterText ||
              !filterField ||
              book[filterField].toLowerCase().includes(filterText.toLowerCase())
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

export default BookList;
