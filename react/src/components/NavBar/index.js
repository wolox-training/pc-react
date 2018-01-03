import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

import UserAvatar from '../UserAvatar';
import routes from '../../constants/routes'
import wbooksLogoSvg from '../../assets/wbooks_logo.svg';
import addBookSvg from '../../assets/add_book.svg';
import notificationsSvg from '../../assets/notifications.svg';

import strings from './strings';
import './styles.css';

class NavBar extends Component {

  toggle = () => {
    this.setState(prevState => ({ dropdownOpen: !prevState.dropdownOpen }));
  }
  clickLogOut = () => {
    sessionStorage.clear();
    window.location.href = routes.LOGIN();
  };
  toggle = this.toggle.bind(this);
  state = {
    dropdownOpen: false
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
              aria-expanded={this.state.dropdownOpen}>
              <UserAvatar />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem onClick={() => {}}>{strings.profile}</DropdownItem>
              <DropdownItem onClick={this.clickLogOut}
              >
                {strings.logout}
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </nav>
    );
  }
}

export default NavBar;
