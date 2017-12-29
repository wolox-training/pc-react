import React, { Component } from 'react';

import UserAvatar from '../../UserAvatar';

import strings from './strings';
import './styles.css';

const textRows = 4;

const CommentaryAdd = () => (
  <div className="add-commentary">
    <UserAvatar />
    <form className="form-commentary">
      <h3 className="commentary-title">{strings.add_commentary}</h3>
      <textarea className="add-commentary-text" rows={textRows} />
      <button className="add-commentary-button">{strings.send}</button>
    </form>
  </div>
);


export default CommentaryAdd;
