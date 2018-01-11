import React, {Component} from 'react';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';

import actionCreators from '../../redux/users/actions';
import CommentaryList from '../CommentaryList';

import strings from './strings.js';
import './styles.css';

const MAX_COMMENTARIES = 4;

class UserProfileCommentaries extends Component {
  componentWillMount() {
    this.props.dispatch(actionCreators.getProfileBookComments());
  }
  render () {
    return (
      <div className="user-profile-commentaries">
        <div className="user-profile-commentaries-title">
          {strings.comments}
        </div>
        <CommentaryList max={MAX_COMMENTARIES} commentaries={this.props.comments} bookLink />
      </div>
    );
  }
}

UserProfileCommentaries.propTypes = {
  comments: PropTypes.array
};

export default connect()(UserProfileCommentaries);
