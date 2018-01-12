import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';

import CommentaryList from '../CommentaryList';
import BookService from '../../redux/books/actions';
import {getLastCommentaries} from '../../selectors';

import CommentaryAdd from './CommentaryAdd';
import strings from './strings';
import './styles.css';

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
          {bookId && <CommentaryList commentaries={this.props.currentBookCommentaries} />}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = store => {
  return {
    currentBookCommentaries: getLastCommentaries(store)
  };
};

export default connect(mapStateToProps)(BookDetailCommentaries);
