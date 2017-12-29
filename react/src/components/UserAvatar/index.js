import React, { Component } from 'react';
import strings from './strings';
import './styles.css';
import default_avatar from '../../assets/default-avatar.gif';

class UserAvatar extends Component {
  render() {
    return (
      <div className="avatar-container">
        <img className="avatar-image" src={default_avatar} />
      </div>
    );
  }
}

export default UserAvatar;
