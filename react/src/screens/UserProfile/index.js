import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';

import withErrorCatch from '../../components/WithErrorCatch';
import actionCreators from '../../redux/users/actions';
import UserProfileDetail from '../../components/UserProfileDetail';
import UserProfileBooks from '../../components/UserProfileBooks';
import UserProfileCommentaries from '../../components/UserProfileCommentaries';

import './styles.css';

class UserProfile extends Component {
  componentWillMount() {
    this.props.dispatch(actionCreators.getUser());
  }
  render() {
    return (
      <div className="user-profile">
        <UserProfileDetail {...this.props}/>
        <UserProfileBooks />
        <UserProfileCommentaries />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.users.user
  };
};

export default connect(mapStateToProps)(withErrorCatch(UserProfile));
