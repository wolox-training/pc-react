import React, { Component } from 'react';

import BookItem from './components/BookItem';
import {data} from '../../mock.js';

import './styles.css';

class BookList extends Component {
  render() {
    const filterText = this.props.filterText;
    const filterField = this.props.filterField;
    return (
      <div className="book-list">
        {
          data.map((book) => {
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
