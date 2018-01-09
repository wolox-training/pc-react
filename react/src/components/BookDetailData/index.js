import React from 'react';
import connect from 'react-redux/es/connect/connect';

import BookImage from '../BookImage';
import {addToWishlist} from '../../redux/books/actions'

import strings from './strings';
import bookDetailStates from '../../constants/bookDetailStates';
import './styles.css';

const BookDetailData = props => {

  const clickWishlist = () => {
    if(props.detail_state.bookState === bookDetailStates.RENTED_NOT_AT_WISHLIST){
      props.dispatch(addToWishlist(props.currentBook.id));
    }
  }
console.log(props)
  return (
    <div className="book-detail-data">
      <BookImage image_url={props.currentBook.image_url} title={props.currentBook.title} width={200} height={275} />
      <div className="book-detail-subdata">
        <div className="book-detail-text-group">
          <h2 className="book-detail-title">{props.currentBook.title}</h2>
          <h3 className="book-detail-subtitle">{props.currentBook.author}</h3>
        </div>
        <div className="book-detail-text-group">
          <h3 className="book-detail-subtitle">{props.currentBook.year}</h3>
          <h3 className="book-detail-subtitle">{props.currentBook.genre}</h3>
        </div>
        <p className = "book-detail-summary">{props.currentBook.description}</p>
        <div className="book-detail-text-group">
          {strings.state_text[props.detail_state.bookState] && <p className="return-data" >*{strings.state_text[props.detail_state.bookState]}</p> }
          <button className="button-rent" disabled={props.detail_state.buttonDisabled || props.loading} onClick={clickWishlist}>{strings[props.detail_state.bookState]}</button>
        </div>
      </div>
    </div>
  );
};

export default connect()(BookDetailData);
