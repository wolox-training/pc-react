import React, { Component,Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';

import BookDetailCommentaries from '../../components/BookDetailCommentaries';
import BookDetailData from '../../components/BookDetailData';
import BookDetailSuggestions from '../../components/BookDetailSuggestions';
import routes from '../../constants/routes';
import withErrorCatch from '../../components/WithErrorCatch';
import actionCreators from '../../redux/books/actions';

import './styles.css';
import strings from './strings';

class BookDetail extends Component {
  componentWillMount() {
    this.props.dispatch(actionCreators.getBook(this.props.match.params.id));
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
          <BookDetailCommentaries  bookId={this.props.match.params.id}/>
        </div>
      </Fragment>
    );
  }
}

BookDetail.propTypes = {
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
  loading: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    currentBook: state.books.currentBook,
    detailState: state.books.detailState,
    loading: state.books.loading
  };
};

export default connect(mapStateToProps)(withErrorCatch(BookDetail));
