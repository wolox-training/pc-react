import React, { Component,Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';

import BookDetailCommentaries from '../../components/BookDetailCommentaries';
import BookDetailData from '../../components/BookDetailData';
import BookDetailSuggestions from '../../components/BookDetailSuggestions';
import routes from '../../constants/routes';
import withErrorCatch from '../../components/WithErrorCatch';
// import {getBook} from '../../services/books';
import {getBook} from '../../redux/books/actions';

import './styles.css';
import strings from './strings';

class BookDetail extends Component {
  componentWillMount() {
    this.props.dispatch(getBook(this.props.match.params.id));
  }
  render() {
    return (
      <Fragment>
        <NavLink to={routes.HOME()} className="go-back">
          &lt; {strings.go_back}
        </NavLink>
        <div className="book-detail">
          <BookDetailData {...this.props} />
          <BookDetailSuggestions />
          <BookDetailCommentaries  bookId={this.props.currentBook.id}/>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentBook: state.books.currentBook,
    detail_state: state.books.detail_state,
    loading: state.books.loading
  };
};

export default connect(mapStateToProps)(withErrorCatch(BookDetail));
