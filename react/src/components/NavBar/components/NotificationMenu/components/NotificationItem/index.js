import React, {PureComponent} from 'react';
import { DropdownItem } from 'reactstrap';

import BookImage from '../../../../../BookImage';

import strings from './strings.js';
import './styles.css';

class NotificationItem extends PureComponent {
  render() {
    return (
      <DropdownItem onClick={() => this.props.onClickFunction(this.props.userId, this.props.notificationId)} className="navbar-notification-item">
        <div className="navbar-notification-item-image">
          <BookImage image_url="http://wolox-training.s3.amazonaws.com/uploads/6963511-M.jpg" title={strings.book} width="55px" height="80px" />
        </div>
        <div className="text-column">
          <div className="navbar-notification-item-reason">
            {this.props.notificationBody}
          </div>
          <div className="navbar-notification-item-book-title">
            {strings.title}
          </div>
          <div className="navbar-notification-item-book-author">
            {strings.author}
          </div>
          <div className="navbar-notification-item-date">
            {strings.returndate}
          </div>
        </div>
      </DropdownItem>
    );
  }
}

export default NotificationItem;
