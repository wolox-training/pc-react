import React, { Component } from 'react';

import default_book from '../../assets/default_book.svg';

import './styles.css';

const BookImage = props => {
  const { width, height } = props;
  return (
    <div className="image-background" style={{ width, height }}>
      <img className="book-image" src={props.image_url || default_book} alt={props.title} />
    </div>
  );

};

export default BookImage;
