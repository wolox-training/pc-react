import React from 'react';

import BookImage from '../BookImage';

import strings from './strings';
import './styles.css';

const BookDetailData = book => {

  return (
    <div className="book-detail-data">
      <BookImage image_url={book.image_url} title={book.title} width={200} height={275} />
      <div className="book-detail-subdata">
        <div className="book-detail-text-group">
          <h2 className="book-detail-title">{book.title}</h2>
          <h3 className="book-detail-subtitle">{book.author}</h3>
        </div>
        <div className="book-detail-text-group">
          <h3 className="book-detail-subtitle">{book.year}</h3>
          <h3 className="book-detail-subtitle">{book.genre}</h3>
        </div>
        <p className = "book-detail-summary">{book.description}</p>

        <button className="button-rent">{strings.rent}</button>
      </div>
    </div>
  );
};

export default BookDetailData;
