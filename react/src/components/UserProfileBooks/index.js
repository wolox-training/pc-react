import React, {Component} from 'react';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';

import BookList from '../BookList';
import actionCreators from '../../redux/users/actions';

import strings from './strings.js';
import './styles.css';

class UserProfileBooks extends Component {
  componentWillMount() {
    this.props.dispatch(actionCreators.getProfileBooks());
  }
  render() {
    return (
      <div className="user-profile-books">
        <div>
          <h3 className="user-profile-books-title">{strings.read}</h3>
          <BookList books={this.props.readBooks} />
          <h3 className="user-profile-books-title">{strings.wishlist}</h3>
          <BookList books={this.props.wishBooks} />
        </div>
      </div>
    );
  }
}

UserProfileBooks.propTypes = {
  readBooks: PropTypes.array,
  wishBooks: PropTypes.array,
};

export default connect()(UserProfileBooks);
