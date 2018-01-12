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
    this.props.getBook(this.props.id);
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.id !== this.props.id){
      this.props.getBook(nextProps.id);
    }
  }
  render() {
    return (
      <Fragment>
        <NavLink to={routes.HOME()} className="go-back">
          &lt; {strings.go_back}
        </NavLink>
        <div className="book-detail">
          <BookDetailData {...this.props} />
          <BookDetailSuggestions bookId={this.props.id} />
          <BookDetailCommentaries bookId={this.props.id} />
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
  loading: PropTypes.bool,
  getBook: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

const mapStateToProps = (store, props) => {
  return {
    currentBook: store.books.currentBook,
    detailState: store.books.detailState,
    loading: store.books.loading,
    id: Number(props.match.params.id)
  };
};

const mapDispatchToProps = (dispatch) => {
  return({
    getBook: bookId => dispatch(actionCreators.getBook(bookId))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorCatch(BookDetail));
