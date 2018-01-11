import React, { Component, Fragment } from 'react';
import connect from 'react-redux/es/connect/connect';

import {getSuggestions} from '../../redux/books/actions';
import BookImageList from '../BookImageList';

import strings from './strings';
import './styles.css';

const MAX_IMAGES = 4;

class BookDetailCommentaries extends Component {
  componentWillMount() {
    this.props.dispatch(getSuggestions(this.props.bookId));
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.bookId !== this.props.bookId){
      this.props.dispatch(getSuggestions(nextProps.bookId));
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

const mapStateToProps = state => {
  return {
    currentBookSuggestion: state.books.currentBookSuggestion
  };
};

export default connect(mapStateToProps)(BookDetailCommentaries);
