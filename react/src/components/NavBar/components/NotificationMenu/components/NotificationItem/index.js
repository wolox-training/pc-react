import React, {PureComponent} from 'react';
import { DropdownItem } from 'reactstrap';

import BookImage from '../../../../../BookImage';

import './styles.css';

class NotificationItem extends PureComponent {
  render() {
    return (
      <DropdownItem onClick={() => this.props.onClickFunction(this.props.userId, this.props.notificationId)} className="navbar-notification-item">
        <div className="navbar-notification-item-image">
          <BookImage image_url="http://wolox-training.s3.amazonaws.com/uploads/6963511-M.jpg" title="Libro" width="55px" height="80px" />
        </div>
        <div className="text-column">
          <div className="text1">
            text1
          </div>
          <div className="text2">
            text2
          </div>
          <div className="text3">
            text3
          </div>
          <div className="text4">
            text4
          </div>
        </div>
      </DropdownItem>
    );
  }
}

export default NotificationItem;
