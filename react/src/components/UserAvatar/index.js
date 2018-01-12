import React from 'react';
import PropTypes from 'prop-types';

import default_avatar from '../../assets/default-avatar.gif';

import './styles.css';

const UserAvatar = ({src, customStyle}) => (
  <div className="avatar-container" style={customStyle}>
    <img className="avatar-image" src={src || default_avatar} alt="Avatar" />
  </div>
);

UserAvatar.propTypes = {
  src: PropTypes.string,
  customStyle: PropTypes.object
};

export default UserAvatar;
