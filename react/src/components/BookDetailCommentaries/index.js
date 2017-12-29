import React, { Component } from 'react';
import CommentaryAdd from './CommentaryAdd';
import CommentaryList from '../CommentaryList';
import strings from './strings';
import './styles.css';
import {data} from '../../mock.js';

class BookDetailCommentaries extends Component {
  render() {
    const bookId = this.props.bookId;
    const book = data.find(item => Number(item.id) === Number(bookId));
    return (
      <div>
        <h2 className="green-subtitle">{strings.commentaries}</h2>
        <div className="commentaries-detail">
          <CommentaryAdd />
          <CommentaryList commentaries={book.commentaries} />
        </div>
      </div>
    );
  }
}

export default BookDetailCommentaries;
