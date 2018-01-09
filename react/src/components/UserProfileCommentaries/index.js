import React from 'react';
import connect from 'react-redux/es/connect/connect';

import './styles.css';

const UserProfileCommentaries = props => {
  return (
    <div className="book-detail-data">
      Comentarios
    </div>
  );
};

export default connect()(UserProfileCommentaries);
