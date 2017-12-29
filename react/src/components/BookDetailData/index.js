import React, { Component } from 'react';
import BookImage from '../BookImage';
import strings from './strings';
import './styles.css';
import {data} from '../../mock.js';

class BookDetailData extends Component {
  render() {
    const bookId = this.props.bookId;
    const book = data.find(item => Number(item.id) === Number(bookId));
    return (
      <div className="book-detail-data">
        <BookImage image_url={book.image_url} title={book.title} width={200} height={275} />
        <div className="book-detail-subdata">
          <div className="book-detail-text">
            <h2 className="book-title">{book.title}</h2>
            <h3 className="book-subtitle">{book.author}</h3>
            <h3 className="book-subtitle">{book.year}</h3>
            <h3 className="book-subtitle">{book.genre}</h3>
            <p className = "book-summary">{book.summary}</p>
          </div>
          <button className="button-rent">{strings.rent}</button>
        </div>
      </div>
    );
  }
}

export default BookDetailData;
