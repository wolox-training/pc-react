import React, { Component } from 'react';

import routes from '../../constants/routes';
import {validateEmail, validatePasswordLength, validatePasswordContent, validateNameContent, validateSurnameContent, validateRepeatPassword} from '../../utils/validations';
import InputWideWithHeader from '../../components/InputWideWithHeader';
import signupPost from '../../services/signupPost';

import './styles.css';
import strings from './strings';

class SignUp extends Component {
  state = {
    buttonText: strings.send,
    posting: false,
    email: '',
    password: '',
    repeatPassword: '',
    name: '',
    surname: '',
    errorEmail: '',
    errorPassword: '',
    errorRepeatPassword: '',
    errorName: '',
    errorSurname: ''
  };

  submitHandler = e => {
    e.preventDefault();
    let errorEmail, errorPassword, errorRepeatPassword, errorName, errorSurname = "";
    errorEmail = validateEmail(this.state.email);
    errorPassword = validatePasswordLength(this.state.password) || validatePasswordContent(this.state.password);
    errorRepeatPassword = !errorPassword && validateRepeatPassword(this.state.password, this.state.repeatPassword);
    errorName = validateNameContent(this.state.name);
    errorSurname = validateSurnameContent(this.state.surname);

    if(!errorEmail && !errorPassword && !errorRepeatPassword && !errorName && !errorSurname){
      this.setState({buttonText: strings.sending, posting: true});
      signupPost(this.state.email, this.state.password, this.state.repeatPassword, this.state.name, this.state.surname)
      .then(
        (response) => {
          if(response.ok){
            window.location.href = routes.LOGIN();
          }else{
            this.setState({
              buttonText: strings.send,
              posting: false,
              email: '',
              password: '',
              repeatPassword: '',
              name: '',
              surname: '',
              errorEmail: response.data.error,
              errorPassword: ' ',
              errorRepeatPassword: ' ',
              errorName: ' ',
              errorSurname: ' ',

            });
          }
        }
      );
    }else{
      errorEmail = errorEmail || '';
      errorPassword = errorPassword || '';
      errorRepeatPassword = errorRepeatPassword || '';
      errorName = errorName || '';
      errorSurname = errorSurname || '';
      this.setState({errorEmail, errorPassword, errorRepeatPassword, errorName, errorSurname});
    }
  }

  setStateHandler = (e, target) => { this.setState({[target]: e.target.value}); }

  handleEmailChange = (e) => this.setStateHandler(e, "email");
  handlePasswordChange = (e) => this.setStateHandler(e, "password");
  handleRepeatPasswordChange = (e) => this.setStateHandler(e, "repeatPassword");
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
            header={strings.repeat_password}
            value={this.state.repeatPassword}
            handler={this.handleRepeatPasswordChange}
            errorMessage={this.state.errorRepeatPassword}
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
            <input type="submit" className="signup-submit" disabled={this.state.posting} value={this.state.buttonText} />
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
