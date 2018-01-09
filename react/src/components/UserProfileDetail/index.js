import React from 'react';
import connect from 'react-redux/es/connect/connect';

import UserAvatar from '../UserAvatar';

import './styles.css';

const UserProfileDetail = props => {
  console.log(props)
  return (
    <div className="user-profile-detail">
      <div className="img">
        <UserAvatar src={props.image_url} customStyle={{width: 110 + 'px', height: 110 + 'px'}}/>
      </div>
      <div className="name">
        {props.user.first_name} {props.user.last_name}
      </div>
      <div className="mail">
        {props.user.email}
      </div>
      <div className="leido"><b>{props.user.rents_counter}</b> leidos </div>
      <div className="comentario"><b>{props.user.comments_counter}</b> comentarios </div>
    </div>
  );
};

export default connect()(UserProfileDetail);
