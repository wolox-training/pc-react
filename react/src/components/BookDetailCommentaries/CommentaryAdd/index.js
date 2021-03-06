import React, {Component} from 'react';
import {connect} from 'react-redux';

import {validateCommentLength} from '../../../utils/validations';
import UserAvatar from '../../UserAvatar';
import BookService from '../../../redux/books/actions'

import strings from './strings';
import './styles.css';

const TEXT_ROWS = 4;

class CommentaryAdd extends Component {
  state = {
    comment: '',
    errorComment: ''
  };
  submitHandler = e => {
    e.preventDefault();

    let errorComment = validateCommentLength(this.state.comment);

    if(!errorComment){
      this.setState({comment: ''});
      this.props.dispatch(BookService.postComment(this.props.bookId, this.state.comment));
    }else{
      errorComment = errorComment || '';
      this.setState({errorComment});

    }
  };

  handleCommentChange = (e) => { this.setState({comment: e.target.value}); }

  render(){
    return (
      <div className="add-commentary">
        <UserAvatar />
        <form className="form-commentary" onSubmit={this.submitHandler}>
          <h3 className="commentary-title">{strings.add_commentary}</h3>
          <textarea className="add-commentary-text" rows={TEXT_ROWS} value={this.state.comment} onChange={this.handleCommentChange} disabled={this.props.loading} />
          {this.state.errorComment && <p className="input-wide-with-header-error-message">{this.state.errorComment}</p>}
          <input type="submit" className="add-commentary-button" value={strings.send} disabled={this.props.loading} />
        </form>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    loading: store.books.loading
  };
};

export default connect(mapStateToProps)(CommentaryAdd);
