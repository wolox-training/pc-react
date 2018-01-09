import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {connect} from 'react-redux';

import UserAvatar from '../UserAvatar';
import routes from '../../constants/routes'
import wbooksLogoSvg from '../../assets/wbooks_logo.svg';
import addBookSvg from '../../assets/add_book.svg';
import notificationsSvg from '../../assets/notifications.svg';
import {logOut} from '../../redux/login/actions';

import strings from './strings';
import './styles.css';

class NavBar extends Component {
  state = {
    dropdownOpen: false
  };
  toggle = () => {
    this.setState(prevState => ({ dropdownOpen: !prevState.dropdownOpen }));
  }
  clickLogOut = () => {
    this.props.dispatch(logOut());
  };


  render() {
    return (
      <nav className="navbar">
        <NavLink to={routes.HOME()}>
          <img className="wbooks-logo" src={wbooksLogoSvg} alt="Wbooks" />
        </NavLink>
        <div className="navbar-icons-group">
          <img src={notificationsSvg} alt={strings.notifications} />
          <img src={addBookSvg} alt={strings.addbook} />
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle
              tag="div"
              data-toggle="dropdown"
              aria-expanded={this.state.dropdownOpen}
            >
              <UserAvatar />
            </DropdownToggle>
            <DropdownMenu right>
            <NavLink className="navbar-link" to={routes.USER()}>
              <DropdownItem onClick={() => {}}>

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

export default connect()(NavBar);
