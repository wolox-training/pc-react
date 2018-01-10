import React, {Component} from 'react';
import connect from 'react-redux/es/connect/connect';

import BookList from '../BookList';
import {getProfileBooks} from '../../redux/books/actions';

import './styles.css';

class UserProfileBooks extends Component {
  componentWillMount() {
    this.props.dispatch(getProfileBooks());
  }
  render() {
    return (
      <div className="user-profile-books">
        <div>
          <h3 className="user-profile-books-title">Leídos</h3>

          <h3 className="user-profile-books-title">Wishlist</h3>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

  };
};


export default connect(mapStateToProps)(UserProfileBooks);
