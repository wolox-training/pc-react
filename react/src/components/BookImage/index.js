import React from 'react';

import default_book from '../../assets/default_book.svg';

import './styles.css';

const BookImage = ({ image_url, title, width, height }) => {
  return (
    <div className="image-background" style={{ width, height }}>
      <img className="book-image" src={image_url || default_book} alt={title} />
    </div>
  );

};

export default BookImage;
