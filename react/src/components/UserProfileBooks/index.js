import React from 'react';
import connect from 'react-redux/es/connect/connect';

import './styles.css';

const UserProfileBooks = props => {
  return (
    <div className="user-profile-books">
      <div>
        <h3 className="user-profile-books-title">Leídos</h3>

        <h3 className="user-profile-books-title">Wishlist</h3>
        
      </div>
    </div>
  );
};

export default connect()(UserProfileBooks);
