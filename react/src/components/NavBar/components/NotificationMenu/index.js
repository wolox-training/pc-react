import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { withRouter } from "react-router-dom";

import routes from '../../../../constants/routes';
import notificationsSvg from '../../../../assets/notifications.svg';
import NotificationItem from './components/NotificationItem';
import actionCreators from '../../../../redux/users/actions';

import strings from './strings.js';

const MAX_CHARS = 50;
const MAX_NOTIFICATIONS = 5;
const ID_MOCK = 5;

class NotificationMenu extends Component {
  state = {
    dropdownNotificationsOpen: false
  };
  toggleNotifications = () => {
    this.setState(prevState => ({ dropdownNotificationsOpen: !prevState.dropdownNotificationsOpen }));
  }
  readComment = (userId, notificationId) => {
    this.props.dispatch(actionCreators.postReadNotification(userId, notificationId));
    this.props.history.push(routes.DETAIL(ID_MOCK));
  }
  render(){
    return (
      <Dropdown isOpen={this.state.dropdownNotificationsOpen} toggle={this.toggleNotifications}>
        <DropdownToggle
          tag="div"
          data-toggle="dropdown"
          aria-expanded={this.state.dropdownNotificationsOpen}
        >
          <img src={notificationsSvg} className="navbar-icon-image" alt={strings.Notifications} />
          {this.props.notifications.length > 0 && <span className="navbar-notifications-unread">{this.props.notifications.length}</span>}
        </DropdownToggle>
        <DropdownMenu right>
          {
            this.props.notifications.slice(0,MAX_NOTIFICATIONS).map(notification => {
              return (
                <NotificationItem
                  onClickFunction={this.readComment}
                  userId={this.props.user.id}
                  notificationId={notification.id}
                  notificationReason={notification.reason}
                  notificationBody={notification.body && notification.body.substring(0, MAX_CHARS)}
                  key={notification.id}
                />
              );
            })
          }
          {
            this.props.notifications.length > MAX_NOTIFICATIONS && <DropdownItem disabled>+{this.props.notifications.length-MAX_NOTIFICATIONS} {strings.notifications}</DropdownItem>
          }
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default withRouter(NotificationMenu);
