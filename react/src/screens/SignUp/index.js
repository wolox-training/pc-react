import React, { Component } from 'react';

import routes from '../../constants/routes';

import './styles.css';
import strings from './strings';

class SignUp extends Component {
  state = {email: '', password: '', name: '', surname: '', errorEmail: '', errorPassword: '', errorName: '', errorSurname: ''};

  submitHandler = e => {
    const validator = require("email-validator");
    let errorEmail, errorPassword, errorName, errorSurname = "";
    if(!validator.validate(this.state.email)){
      errorEmail = strings.error_email_not_valid;
    }

    if(this.state.password.length < 8 || this.state.password.length > 52){
      errorPassword = strings.error_password_size;
    } else if (this.state.password.search(/\d/) === -1 || this.state.password.search(/[a-zA-Z]/) === -1) {
      errorPassword = strings.error_password_content;
    }

    if(this.state.name.search(/[a-zA-Z]/) === -1) {
      errorName = strings.error_name_content;
    }

    if(this.state.surname.search(/[a-zA-Z]/) === -1) {
      errorSurname = strings.error_surname_content;
    }

    if(!errorEmail && !errorPassword && !errorName && !errorSurname){
    }else{
      e.preventDefault();
    }
  }

  handleEmailChange = (e) => { this.setState({email: e.target.value}); }
  handlePasswordChange = (e) => { this.setState({password: e.target.value}); }
  handleNameChange = (e) => { this.setState({name: e.target.value}); }
  handleSurnameChange = (e) => { this.setState({surname: e.target.value}); }

  render() {
    sessionStorage.clear();
    return (

      <div className="signup-screen">
        <h1 className="signup-title">{strings.signup}</h1>
        <form className="signup-form" action={routes.HOME()} onSubmit={this.submitHandler}>
          <div className="signup-field">
            <h4 className="signup-field-title">{strings.email}</h4>
            <input id="email" type="text" className={`signup-text ${this.state.errorEmail ? 'signup-text-error' : ''}`} value={this.state.email} onChange={this.handleEmailChange}/>
            {this.state.errorEmail ? <p className="error-message">{this.state.errorEmail}</p> : null}
          </div>
          <div className="signup-field">
            <h4 className="signup-field-title">{strings.password}</h4>
            <input id="password" type="password" className={`signup-text ${this.state.errorPassword ? 'signup-text-error' : ''}`} value={this.state.password} onChange={this.handlePasswordChange} />
            {this.state.errorPassword ? <p className="error-message">{this.state.errorPassword}</p> : null}
          </div>
          <div className="signup-field">
            <h4 className="signup-field-title">{strings.name}</h4>
            <input id="name" type="text" className={`signup-text ${this.state.errorName ? 'signup-text-error' : ''}`} value={this.state.name} onChange={this.handleNameChange} />
            {this.state.errorName ? <p className="error-message">{this.state.errorName}</p> : null}
          </div>
          <div className="signup-field">
            <h4 className="signup-field-title">{strings.surname}</h4>
            <input id="surname" type="text" className={`signup-text ${this.state.errorSurname ? 'signup-text-error' : ''}`} value={this.state.surname} onChange={this.handleSurnameChange} />
            {this.state.errorSurname ? <p className="error-message">{this.state.errorSurname}</p> : null}
          </div>
          <div className="signup-submit-container">
            <input type="submit" className="signup-submit" value={strings.send} />
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
