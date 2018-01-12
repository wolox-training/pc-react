import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {connect} from 'react-redux';

import actionCreators from '../../redux/users/actions';
import UserAvatar from '../UserAvatar';
import routes from '../../constants/routes'
import wbooksLogoSvg from '../../assets/wbooks_logo.svg';
import {logOut} from '../../redux/login/actions';
import NotificationMenu from './components/NotificationMenu';
import AddSuggestionMenu from './components/AddSuggestionMenu';

import strings from './strings';
import './styles.css';

class NavBar extends Component {
  state = {
    dropdownUserOpen: false,
  };
  
  toggleUser = () => {
    this.setState(prevState => ({ dropdownUserOpen: !prevState.dropdownUserOpen }));
  }

  clickLogOut = () => {
    this.props.dispatch(logOut());
  };

  componentWillMount() {
    this.props.dispatch(actionCreators.getUser());
    this.props.dispatch(actionCreators.getNotifications(this.props.user.id));
  }

  render() {
    return (
      <nav className="navbar">
        <NavLink to={routes.HOME()}>
          <img className="wbooks-logo" src={wbooksLogoSvg} alt="Wbooks" />
        </NavLink>
        <div className="navbar-icons-group">

          <NotificationMenu {...this.props} />
          <AddSuggestionMenu />

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
    user: state.users.profileState.user,
    notifications: state.users.notifications.filter(notification => !notification.read)
  };
};

export default connect(mapStateToProps)(NavBar);
