import React, { Component } from 'react';
import BookImageList from '../BookImageList';
import strings from './strings';
import './styles.css';

class BookDetailSuggestions extends Component {
  render() {
    return (
      <div>
        <h2 className="green-subtitle">{strings.suggestions}</h2>
        <BookImageList max={4}/>
      </div>
    );
  }
}

export default BookDetailSuggestions;
