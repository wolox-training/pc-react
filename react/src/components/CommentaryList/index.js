import React, { Component } from 'react';

import UserAvatar from '../UserAvatar'

import './styles.css';

class CommentaryList extends Component {
  render() {
    const commentaryList = this.props.commentaries.map((commentary, i) => {
      return (
        <div className="commentary" key={i}>
          <UserAvatar />
          <h3 className="commentary-title">{commentary.name}</h3>
          <h4 className="commentary-date">{commentary.date}</h4>
          <p className="commentary-text">{commentary.text}</p>
        </div>
      );
    });
    return (
      <div>
        {commentaryList}
      </div>
    );
  }
}

export default CommentaryList;
