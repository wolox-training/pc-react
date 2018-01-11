import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {connect} from 'react-redux';

import actionCreators from '../../redux/users/actions';
import UserAvatar from '../UserAvatar';
import routes from '../../constants/routes'
import wbooksLogoSvg from '../../assets/wbooks_logo.svg';
import addBookSvg from '../../assets/add_book.svg';
import notificationsSvg from '../../assets/notifications.svg';
import {logOut} from '../../redux/login/actions';
import NotificationList from '../NotificationList';

import strings from './strings';
import './styles.css';

class NavBar extends Component {
  state = {
    dropdownUserOpen: false,
    dropdownNotificationsOpen: false
  };
  toggleUser = () => {
    this.setState(prevState => ({ dropdownUserOpen: !prevState.dropdownUserOpen }));
  }
  toggleNotifications = () => {
    this.setState(prevState => ({ dropdownNotificationsOpen: !prevState.dropdownNotificationsOpen }));
  }
  clickLogOut = () => {
    this.props.dispatch(logOut());
  };

  componentWillMount() {
    this.props.dispatch(actionCreators.getUser());
  }

  render() {
    return (
      <nav className="navbar">
        <NavLink to={routes.HOME()}>
          <img className="wbooks-logo" src={wbooksLogoSvg} alt="Wbooks" />
        </NavLink>
        <div className="navbar-icons-group">

          <Dropdown isOpen={this.state.dropdownNotificationsOpen} toggle={this.toggleNotifications}>
            <DropdownToggle
              tag="div"
              data-toggle="dropdown"
              aria-expanded={this.state.dropdownNotificationsOpen}
            >
              <img src={notificationsSvg} className="navbar-icon-image" alt={strings.notifications} />
            </DropdownToggle>
            <NotificationList userId={this.props.user.id} />
          </Dropdown>

          <img src={addBookSvg} className="navbar-icon-image" alt={strings.addbook} />

          <Dropdown isOpen={this.state.dropdownUserOpen} toggle={this.toggleUser}>
            <DropdownToggle
              tag="div"
              data-toggle="dropdown"
              aria-expanded={this.state.dropdownUserOpen}
            >
              <UserAvatar src={this.props.user.image_url} />
            </DropdownToggle>
            <DropdownMenu right>
              <NavLink className="navbar-link" to={routes.USER()}>
                <DropdownItem>
                    {strings.profile}
                </DropdownItem>
              </NavLink>
              <DropdownItem onClick={this.clickLogOut}>
                {strings.logout}
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.users.profileState.user
  };
};

export default connect(mapStateToProps)(NavBar);
