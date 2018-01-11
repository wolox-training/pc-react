import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import notificationsSvg from '../../../../assets/notifications.svg';
import NotificationItem from './components/NotificationItem';

import strings from './strings.js';

const MAX_CHARS = 50;
const MAX_NOTIFICATIONS = 10;

class NotificationMenu extends Component {
  state = {
    dropdownNotificationsOpen: false
  };
  toggleNotifications = () => {
    this.setState(prevState => ({ dropdownNotificationsOpen: !prevState.dropdownNotificationsOpen }));
  }
  readComment = (notificationId) => {
    console.log(notificationId)
  }
  render(){
    return (<Dropdown isOpen={this.state.dropdownNotificationsOpen} toggle={this.toggleNotifications}>
      <DropdownToggle
        tag="div"
        data-toggle="dropdown"
        aria-expanded={this.state.dropdownNotificationsOpen}
      >
        <img src={notificationsSvg} className="navbar-icon-image" alt={strings.notifications} />
        <span className="navbar-notifications-unread">{this.props.notifications.length}</span>
      </DropdownToggle>
      <DropdownMenu right>
        {
          this.props.notifications.filter(notification => !notification.read).slice(0,MAX_NOTIFICATIONS).map(notification => {
            return (
              <NotificationItem onClickFunction={this.readComment} notificationId={notification.id} notificationReason={notification.reason} notificationBody={notification.body && notification.body.substring(0, MAX_CHARS)} />
            );
          })
        }
        {
          this.props.notifications.length > MAX_NOTIFICATIONS && <DropdownItem disabled>+{this.props.notifications.length-MAX_NOTIFICATIONS} notificaciones</DropdownItem>
        }
      </DropdownMenu>
    </Dropdown>);
  }
}

export default NotificationMenu;
