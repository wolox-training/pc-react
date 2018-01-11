import React, { Component, Fragment } from 'react';
import connect from 'react-redux/es/connect/connect';
import { DropdownMenu } from 'reactstrap';

import actionCreators from '../../redux/users/actions';

class BookDetailCommentaries extends Component {
  componentWillMount() {
    this.props.dispatch(actionCreators.getNotifications(this.props.userId));
  }
  render() {
    return (
      <DropdownMenu right>
        <h2 className="green-subtitle">Notif</h2>
      </DropdownMenu>
    );
  }
}

const mapStateToProps = state => {
  return {
    notifications: state.users.notifications
  };
};

export default connect(mapStateToProps)(BookDetailCommentaries);
