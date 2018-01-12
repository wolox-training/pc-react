import React, { Component } from 'react';
import NavLink from 'react-router-dom/NavLink';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import actionCreators from '../../redux/login/actions';
import {validateEmail, validatePasswordLength} from '../../utils/validations';
import InputWideWithHeader from '../../components/InputWideWithHeader';
import routes from '../../constants/routes';

import './styles.css';
import strings from './strings';

class Login extends Component {
  state = {
    email: '',
    password: '',
    errorEmail: '',
    errorPassword: '',
    posting: false,
  };

  submitHandler = e => {
    e.preventDefault();
    let errorEmail, errorPassword;
    errorEmail = validateEmail(this.state.email);
    errorPassword = validatePasswordLength(this.state.password);

    if(!errorEmail && !errorPassword){
      this.props.dispatch(actionCreators.logIn(this.state.email, this.state.password));
    }else{
      errorEmail = errorEmail || '';
      errorPassword = errorPassword || '';
      this.setState({errorEmail, errorPassword});

    }
  }
  handleEmailChange = (e) => { this.setState({email: e.target.value, errorEmail: ''}); }
  handlePasswordChange = (e) => { this.setState({password: e.target.value, errorPassword: ''}); }

  render() {
    return (
      <div className="login-screen">
        <h1 className="login-title">{strings.login}</h1>
        <form className="login-form" onSubmit={this.submitHandler}>
          <InputWideWithHeader
            header={strings.email}
            value={this.state.email}
            handler={this.handleEmailChange}
            errorMessage={this.state.errorEmail || this.props.error}
            type="text"
          />
          <InputWideWithHeader
            header={strings.password}
            value={this.state.password}
            handler={this.handlePasswordChange}
            errorMessage={this.state.errorPassword}
            type="password"
          />
          <div className="login-submit-container">
            <input type="submit" className="login-submit" disabled={this.props.posting} value={this.props.buttonText} />
          </div>
        </form>
        <NavLink to={routes.SIGNUP()}>
          Registrarse
        </NavLink>
      </div>
    );
  }
}

Login.propTypes = {
  buttonText: PropTypes.string,
  posting: PropTypes.bool,
  error: PropTypes.string
}

const mapStateToProps = store => {
  return {...store.login.loginState}
};

export default connect(mapStateToProps)(Login);
