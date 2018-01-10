import React from 'react';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';

import UserAvatar from '../UserAvatar';

import styles from './styles.js';
import './styles.css';

const UserProfileDetail = ({user}) => {
  return (
    <div className="user-profile-detail">
      <div className="user-profile-detail-image">
        <UserAvatar src={user.image_url} customStyle={styles.avatarStyle}/>
      </div>
      <div className="user-profile-detail-name">
        {user.first_name} {user.last_name}
      </div>
      <div className="user-profile-detail-email">
        {user.email}
      </div>
      <div className="user-profile-detail-read-counter">
        <span className="user-profile-detail-number">{user.rents_counter}</span> leidos
      </div>
      <div className="user-profile-detail-comment-counter">
        <span className="user-profile-detail-number">{user.comments_counter}</span> comentarios
      </div>
    </div>
  );
};

UserProfileDetail.propTypes = {
  user: PropTypes.shape({
    image_url: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    rents_counter: PropTypes.number,
    comments_counter: PropTypes.number
  })
};

export default connect()(UserProfileDetail);
