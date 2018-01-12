import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import actionCreators from '../../redux/books/actions';
import BookImageList from '../BookImageList';

import strings from './strings';
import './styles.css';

const MAX_IMAGES = 4;

class BookDetailCommentaries extends Component {
  componentWillMount() {
    this.props.getSuggestions(this.props.bookId);
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.bookId !== this.props.bookId){
      this.props.getSuggestions(nextProps.bookId);
    }
  }
  render() {
    return (
      <Fragment>
        <h2 className="green-subtitle">{strings.suggestions}</h2>
        <BookImageList max={MAX_IMAGES} books={this.props.currentBookSuggestion} />
      </Fragment>
    );
  }
}

BookDetailCommentaries.propTypes = {
  currentBookSuggestion: PropTypes.array,
  bookId: PropTypes.number.isRequired,
  getSuggestions: PropTypes.func.isRequired
};

const mapStateToProps = store => {
  return {
    currentBookSuggestion: store.books.currentBookSuggestion
  };
};

const mapDispatchToProps = (dispatch) => {
  return({
    getSuggestions: bookId => dispatch(actionCreators.getSuggestions(bookId))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailCommentaries);
