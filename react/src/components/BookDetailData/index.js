import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import BookImage from '../BookImage';
import actionCreators from '../../redux/books/actions';

import strings from './strings';
import bookDetailStates from '../../constants/bookDetailStates';
import './styles.css';

const BookDetailData = ({detailState, currentBook, loading, clickWishlist, dispatch}) => {

  return (
    <div className="book-detail-data">
      <BookImage image_url={currentBook.image_url} title={currentBook.title} width={200} height={275} />
      <div className="book-detail-subdata">
        <div className="book-detail-text-group">
          <h2 className="book-detail-title">{currentBook.title}</h2>
          <h3 className="book-detail-subtitle">{currentBook.author}</h3>
        </div>
        <div className="book-detail-text-group">
          <h3 className="book-detail-subtitle">{currentBook.year}</h3>
          <h3 className="book-detail-subtitle">{currentBook.genre}</h3>
        </div>
        <p className = "book-detail-summary">{currentBook.description}</p>
        <div className="book-detail-text-group">
          {strings.stateText[detailState.bookState] && <p className="return-data" >*{strings.stateText[detailState.bookState]} {detailState.returnBefore}</p> }
          <button className="button-rent" disabled={detailState.buttonDisabled || loading} onClick={clickWishlist}>{strings[detailState.bookState]}</button>
        </div>
      </div>
    </div>
  );
};

BookDetailData.propTypes = {
  detailState: PropTypes.shape({
    buttonDisabled: PropTypes.bool,
    bookState: PropTypes.string,
    returnBefore: PropTypes.string
  }),
  currentBook: PropTypes.shape({
    image_url: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    year: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    genre: PropTypes.string,
    description: PropTypes.string
  }),
  loading: PropTypes.bool,
  clickWishlist: PropTypes.func,
  dispatch: PropTypes.func
};

function mapDispatchToProps(dispatch, props) {
  return({
    clickWishlist: () => {props.detailState.bookState === bookDetailStates.RENTED_NOT_AT_WISHLIST && dispatch(actionCreators.addToWishlist(props.currentBook.id));}
  });
}

export default connect(null, mapDispatchToProps)(BookDetailData);
