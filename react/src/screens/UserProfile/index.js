import React, { Component } from 'react';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';

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
        <UserProfileDetail {...this.props.profileState} />
        <UserProfileBooks {...this.props.profileState} />
        <UserProfileCommentaries {...this.props.profileState}/>
      </div>
    );
  }
}

UserProfile.propTypes = {
  profileState: PropTypes.shape({
    user: PropTypes.shape({
      image_url: PropTypes.string,
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      email: PropTypes.string,
      rents_counter: PropTypes.number,
      comments_counter: PropTypes.number
    }),
    readBooks: PropTypes.array,
    wishBooks: PropTypes.array,
    comments: PropTypes.array,
  })
};

const mapStateToProps = state => {
  return {
    profileState: state.users.profileState
  };
};

export default connect(mapStateToProps)(withErrorCatch(UserProfile));
