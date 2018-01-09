import React, { Component } from 'react';

import UserAvatar from '../UserAvatar'

import './styles.css';

class CommentaryList extends Component {
  render() {console.log(this.props.commentaries)
    return (
      <div>
        {
          this.props.commentaries.reverse().slice(0, this.props.max).map((commentary, i) => {
            return (
              <div className="commentary" key={i}>
                <UserAvatar src={commentary.user.image_url}/>
                <h3 className="commentary-title">{commentary.user.first_name} {commentary.user.last_name}</h3>
                <h4 className="commentary-date">{commentary.created_at}</h4>
                <p className="commentary-text">{commentary.content}</p>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default CommentaryList;
