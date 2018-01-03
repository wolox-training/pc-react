import React from 'react';

import UserAvatar from '../../UserAvatar';

import strings from './strings';
import './styles.css';

const TEXT_ROWS = 4;

const CommentaryAdd = () => (
  <div className="add-commentary">
    <UserAvatar />
    <form className="form-commentary">
      <h3 className="commentary-title">{strings.add_commentary}</h3>
      <textarea className="add-commentary-text" rows={TEXT_ROWS} />
      <button className="add-commentary-button">{strings.send}</button>
    </form>
  </div>
);


export default CommentaryAdd;
