import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';

import CommentaryList from '../CommentaryList';
import BookService from '../../redux/books/actions';

import CommentaryAdd from './CommentaryAdd';
import strings from './strings';
import './styles.css';

const MAX_COMMENTARIES = 4;

class BookDetailCommentaries extends Component {
  componentWillMount() {
    this.props.dispatch(BookService.getCommentaries(this.props.bookId));
  }
  render() {
    const bookId = this.props.bookId;

    return (
      <Fragment>
        <h2 className="green-subtitle">{strings.commentaries}</h2>
        <div className="commentaries-detail">
          <CommentaryAdd bookId={this.props.bookId}/>
          {bookId && <CommentaryList max={MAX_COMMENTARIES} commentaries={this.props.currentBookCommentaries} />}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentBookCommentaries: state.books.currentBookCommentaries
  };
};

export default connect(mapStateToProps)(BookDetailCommentaries);
