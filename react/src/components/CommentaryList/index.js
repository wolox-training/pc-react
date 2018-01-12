import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Moment from 'react-moment';


import UserAvatar from '../UserAvatar'
import routes from '../../constants/routes';

import './styles.css';

class CommentaryList extends Component {
  render() {
    return (
      <div>
        {
          this.props.commentaries && this.props.commentaries.sort((a, b) => b.id-a.id).slice(0, this.props.max).map((commentary, i) => {
            return (
              <div className="commentary" key={i}>
                <UserAvatar src={commentary.user.image_url}/>
                <h3 className="commentary-title">{commentary.user.first_name} {commentary.user.last_name}</h3>
                {this.props.bookLink && <NavLink to={routes.DETAIL(commentary.book.id)} className="commentary-book-link">{commentary.book.title}</NavLink>}
                <h4 className="commentary-date">
                  <Moment date={commentary.created_at} format="DD/MM/YY" />
                </h4>
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
