import React, { Component,Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import BookDetailCommentaries from '../../components/BookDetailCommentaries';
import BookDetailData from '../../components/BookDetailData';
import BookDetailSuggestions from '../../components/BookDetailSuggestions';
import routes from '../../constants/routes';
import withErrorCatch from '../../components/WithErrorCatch';
import {getBook} from '../../services/books';

import './styles.css';
import strings from './strings';

class BookDetail extends Component {
  state = ({data: []})
  componentWillMount() {
    getBook(
      this.props.match.params.id
    ).then(
      response => this.setState({data: response.data})
    );
  }
  render() {
    return (
      <Fragment>
        <NavLink to={routes.HOME()} className="go-back">
          &lt; {strings.go_back}
        </NavLink>
        <div className="book-detail">
          <BookDetailData {...this.state.data} />
          <BookDetailSuggestions />
          <BookDetailCommentaries  bookId={this.props.match.params.id}/>
        </div>
      </Fragment>
    );
  }
}

export default withErrorCatch(BookDetail);
