import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import actionCreators from '../../redux/users/actions';
import CommentaryList from '../CommentaryList';

import strings from './strings.js';
import './styles.css';

class UserProfileCommentaries extends Component {
  componentWillMount() {
    this.props.getProfileBookComments();
  }
  render () {
    return (
      <div className="user-profile-commentaries">
        <div className="user-profile-commentaries-title">
          {strings.comments}
        </div>
        <CommentaryList commentaries={this.props.comments} bookLink />
      </div>
    );
  }
}

UserProfileCommentaries.propTypes = {
  comments: PropTypes.array.isRequired,
  getProfileBookComments: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return({
    getProfileBookComments: () => {dispatch(actionCreators.getProfileBookComments());}
  });
};

export default connect(null, mapDispatchToProps)(UserProfileCommentaries);
