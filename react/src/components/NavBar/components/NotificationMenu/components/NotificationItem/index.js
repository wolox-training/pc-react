import React, {PureComponent} from 'react';
import { DropdownItem } from 'reactstrap';


class NotificationItem extends PureComponent {
  render() {
    return (
      <DropdownItem onClick={() => this.props.onClickFunction(this.props.notificationId)}>
        {this.props.notificationReason} {this.props.notificationBody}
      </DropdownItem>
    );
  }
}

export default NotificationItem;
