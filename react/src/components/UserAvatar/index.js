import React from 'react';

import default_avatar from '../../assets/default-avatar.gif';

import './styles.css';

const UserAvatar = () => (
  <div className="avatar-container">
    <img className="avatar-image" src={default_avatar} alt="Avatar" />
  </div>
);

export default UserAvatar;
