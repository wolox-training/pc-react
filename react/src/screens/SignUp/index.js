import React, { Component } from 'react';

import routes from '../../constants/routes';
import {validateEmail, validatePasswordLength, validatePasswordContent, validateNameContent, validateSurnameContent} from '../../utils/validations';
import InputWideWithHeader from '../../components/InputWideWithHeader';

import './styles.css';
import strings from './strings';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    name: '',
    surname: '',
    errorEmail: '',
    errorPassword: '',
    errorName: '',
    errorSurname: ''
  };

  submitHandler = e => {
    let errorEmail, errorPassword, errorName, errorSurname = "";
    errorEmail = validateEmail(this.state.email);
    errorPassword = validatePasswordLength(this.state.password) || validatePasswordContent(this.state.password);
    errorName = validateNameContent(this.state.name);
    errorSurname = validateSurnameContent(this.state.surname);

    if(errorEmail || errorPassword || errorName || errorSurname){
      errorEmail = errorEmail || '';
      errorPassword = errorPassword || '';
      errorName = errorName || '';
      errorSurname = errorSurname || '';
      this.setState({errorEmail, errorPassword, errorName, errorSurname});
      e.preventDefault();
    }
  }

  setStateHandler = (e, target) => { this.setState({[target]: e.target.value}); }

  handleEmailChange = (e) => this.setStateHandler(e, "email");
  handlePasswordChange = (e) => this.setStateHandler(e, "password");
  handleNameChange = (e) => this.setStateHandler(e, "name");
  handleSurnameChange = (e) => this.setStateHandler(e, "surname");

  render() {
    return (

      <div className="signup-screen">
        <h1 className="signup-title">{strings.signup}</h1>
        <form className="signup-form" action={routes.LOGIN()} onSubmit={this.submitHandler}>
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
          <InputWideWithHeader
            header={strings.name}
            value={this.state.name}
            handler={this.handleNameChange}
            errorMessage={this.state.errorName}
            type="text"
          />
          <InputWideWithHeader
            header={strings.surname}
            value={this.state.surname}
            handler={this.handleSurnameChange}
            errorMessage={this.state.errorSurname}
            type="text"
          />
          <div className="signup-submit-container">
            <input type="submit" className="signup-submit" value={strings.send} />
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
