import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import BookList from '../BookList';
import actionCreators from '../../redux/users/actions';

import strings from './strings.js';
import './styles.css';

class UserProfileBooks extends Component {
  componentWillMount() {
    this.props.getProfileBooks();
  }
  render() {
    return (
      <div className="user-profile-books">
        <h3 className="user-profile-books-title">{strings.read}</h3>
        <BookList books={this.props.readBooks} />
        <h3 className="user-profile-books-title">{strings.wishlist}</h3>
        <BookList books={this.props.wishBooks} />
      </div>
    );
  }
}

UserProfileBooks.propTypes = {
  readBooks: PropTypes.array.isRequired,
  wishBooks: PropTypes.array.isRequired,
  getProfileBooks: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return({
    getProfileBooks: () => {dispatch(actionCreators.getProfileBooks());}
  });
};

export default connect(null, mapDispatchToProps)(UserProfileBooks);
