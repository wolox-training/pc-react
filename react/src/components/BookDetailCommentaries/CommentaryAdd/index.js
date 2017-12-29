import React, { Component } from 'react';
import UserAvatar from '../../UserAvatar';
import strings from './strings';
import './styles.css';

class CommentaryAdd extends Component {
  render() {
    return (
      <div className="add-commentary">
        <UserAvatar />
        <form className="form-commentary">
          <h3 className="commentary-title">{strings.add_commentary}</h3>
          <textarea className="add-commentary-text" rows="4" />
          <button className="add-commentary-button" >{strings.send}</button>
        </form>
      </div>
    );
  }
}

export default CommentaryAdd;
