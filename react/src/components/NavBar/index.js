import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {connect} from 'react-redux';

import usersActionCreators from '../../redux/users/actions';
import UserAvatar from '../UserAvatar';
import routes from '../../constants/routes'
import wbooksLogoSvg from '../../assets/wbooks_logo.svg';
import addBookSvg from '../../assets/add_book.svg';
import NotificationMenu from './components/NotificationMenu';
import loginActionCreators from '../../redux/login/actions';
import {getUnreadNotifications} from '../../selectors';


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
    sessionStorage.clear();
    this.props.dispatch(loginActionCreators.logOut());
  };

  componentWillMount() {
    this.props.dispatch(usersActionCreators.getUser());
    this.props.dispatch(usersActionCreators.getNotifications(this.props.user.id));
  }

  render() {
    return (
      <nav className="navbar">
        <NavLink to={routes.HOME()}>
          <img className="wbooks-logo" src={wbooksLogoSvg} alt="Wbooks" />
        </NavLink>
        <div className="navbar-icons-group">
          <NotificationMenu {...this.props} />
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

const mapStateToProps = store => {
  return {
    user: store.users.profileState.user,
    notifications: getUnreadNotifications(store)
  };
};

export default connect(mapStateToProps)(NavBar);
