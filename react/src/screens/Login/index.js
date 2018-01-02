import React, { Component } from 'react';

import './styles.css';
import strings from './strings';

class Login extends Component {
  state = {email: '', password: '', errorEmail: '', errorPassword: ''}
  submitHandler = e => {

    const validator = require("email-validator");
    let errorEmail, errorPassword = "";
    if(!validator.validate(this.state.email)){
      errorEmail = strings.error_email_not_valid;
    }else{
      errorEmail = "";
    }
    if(this.state.password.length < 8 || this.state.password.length > 52){
      errorPassword = strings.error_password_size;
    } else if (this.state.password.search(/\d/) === -1 || this.state.password.search(/[a-zA-Z]/) === -1) {
      errorPassword = strings.error_password_content;
    }else{
      errorPassword = "";
    }
    if(!errorEmail && !errorPassword){
      sessionStorage.setItem('user_session', this.state.email);
    }else{
      this.setState({errorEmail, errorPassword});
      e.preventDefault();
    }
  }
  handleEmailChange = (e) => { this.setState({email: e.target.value}); }
  handlePasswordChange = (e) => { this.setState({password: e.target.value}); }

  render() {
    return (
      <div className="login-screen">
        <h1 className="login-title">{strings.login}</h1>
        <form className="login-form" onSubmit={this.submitHandler}>
          <div className="login-field">
            <h4 className="login-field-title">{strings.email}</h4>
            <input id="email" type="text" className={`login-text ${this.state.errorEmail ? 'login-text-error' : ''}`} value={this.state.email} onChange={this.handleEmailChange}/>
            {this.state.errorEmail ? <p className="error-message">{this.state.errorEmail}</p> : null}
          </div>
          <div className="login-field">
            <h4 className="login-field-title">{strings.password}</h4>
            <input id="password" type="password" className={`login-text ${this.state.errorPassword ? 'login-text-error' : ''}`} value={this.state.password} onChange={this.handlePasswordChange} />
            {this.state.errorPassword ? <p className="error-message">{this.state.errorPassword}</p> : null}
          </div>
          <div className="login-submit-container">
            <input type="submit" className="login-submit" value={strings.send} />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
