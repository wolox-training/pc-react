import React, { Component } from 'react';

import {validateEmail, validatePasswordLength, validatePasswordContent} from '../../utils/validations';
import InputWideWithHeader from '../../components/InputWideWithHeader';

import './styles.css';
import strings from './strings';

class Login extends Component {
  state = {email: '', password: '', errorEmail: '', errorPassword: ''};
  submitHandler = e => {

    let errorEmail, errorPassword = "";
    errorEmail = validateEmail(this.state.email);
    errorPassword = validatePasswordLength(this.state.password) || validatePasswordContent(this.state.password);

    if(!errorEmail && !errorPassword){
      sessionStorage.setItem('user_session', this.state.email);
    }else{
      errorEmail = errorEmail || '';
      errorPassword = errorPassword || '';
      this.setState({errorEmail, errorPassword});
      e.preventDefault();
    }
  }
  handleEmailChange = (e) => { this.setState({email: e.target.value}); }
  handlePasswordChange = (e) => { this.setState({password: e.target.value}); }

  render() {
    sessionStorage.clear();
    return (
      <div className="login-screen">
        <h1 className="login-title">{strings.login}</h1>
        <form className="login-form" onSubmit={this.submitHandler}>
          <InputWideWithHeader
            header={strings.email}
            value={this.state.email}
            handler={this.handleEmailChange}
            errorMessage={this.state.errorEmail}
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
            <input type="submit" className="login-submit" value={strings.send} />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;