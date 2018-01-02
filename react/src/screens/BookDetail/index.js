import React, { Component } from 'react';
import BookDetailCommentaries from '../../components/BookDetailCommentaries';
import BookDetailData from '../../components/BookDetailData';
import BookDetailSuggestions from '../../components/BookDetailSuggestions';
import { NavLink } from 'react-router-dom';
import './styles.css';

class BookDetail extends Component {
  render() {
    sessionStorage.clear();
    return (
      <div>
        <NavLink to="/" className="go-back">
          &lt; Volver
        </NavLink>
        <div className="book-detail">
          <BookDetailData bookId={this.props.match.params.id} />
          <BookDetailSuggestions />
          <BookDetailCommentaries  bookId={this.props.match.params.id}/>
        </div>
      </div>
    );
  }
}

export default BookDetail;
