import React from 'react';
import connect from 'react-redux/es/connect/connect';

import './styles.css';

const UserProfileBooks = props => {
  return (
    <div className="book-detail-data">
      Libros
    </div>
  );
};

export default connect()(UserProfileBooks);
