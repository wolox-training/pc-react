import React, { Component } from 'react';

import BookImageList from '../BookImageList';

import strings from './strings';
import './styles.css';

const max_images = 4;

const BookDetailSuggestions = () => (
  <div>
    <h2 className="green-subtitle">{strings.suggestions}</h2>
    <BookImageList max={max_images} />
  </div>
);


export default BookDetailSuggestions;
