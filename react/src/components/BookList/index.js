import React, { Component } from 'react';
import BookItem from './components/BookItem';
import './styles.css';
import {data} from '../../mock.js';

class BookList extends Component {
  render() {
    const filterText = this.props.filterText;
    const filterField = this.props.filterField;
    let books = data.map((book) => {
      if(
        !filterText ||
        !filterField ||
        book[filterField].toLowerCase().includes(filterText.toLowerCase())
      ){
        return <BookItem key={book.id} {...book} />;
      }
      return null;
    })
    return (
      <div className="book-list">
        {books}
      </div>
    );
  }
}

export default BookList;
