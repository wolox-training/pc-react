import React, { Fragment } from 'react';

import BookImageList from '../BookImageList';

import strings from './strings';
import './styles.css';

const MAX_IMAGES = 4;

const BookDetailSuggestions = () => (
  <Fragment>
    <h2 className="green-subtitle">{strings.suggestions}</h2>
    <BookImageList max={MAX_IMAGES} />
  </Fragment>
);


export default BookDetailSuggestions;
