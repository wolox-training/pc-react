import React, { Component } from 'react';
import NavLink from 'react-router-dom/NavLink';
import {create} from 'apisauce'

import {validateEmail, validatePasswordLength, validatePasswordContent} from '../../utils/validations';
import InputWideWithHeader from '../../components/InputWideWithHeader';
import routes from '../../constants/routes';

import './styles.css';
import strings from './strings';

class Login extends Component {
  state = {email: '', password: '', errorEmail: '', errorPassword: ''};
  postLogin =  (e) => {
    // var request = new XMLHttpRequest();
    // request.open('POST', 'https://wbooks-api-stage.herokuapp.com/api/v1/users/sessions', false);  // `false` makes the request synchronous
    // request.setRequestHeader("Content-type", "application/json");
    // request.send(JSON.stringify({email: this.state.email, password: this.state.password}));
    //
    // if(request.status === 200){
    //   sessionStorage.setItem('user_session', this.state.email);
    //   sessionStorage.setItem('access_token', request.response.access_token);
    //   console.log(request.response.access_token);
    // }else{
    //   e.preventDefault();
    // }
    const api = create({
      baseURL: 'https://wbooks-api-stage.herokuapp.com/api/v1'
    })
    // customizing headers per-request
    api.post(
      '/users/sessions',
      {email: this.state.email, password: this.state.password}
    ).then(
      (response) => {
        console.log(response)
      }
    )
    console.log(e)
    e.preventDefault();

  }
  submitHandler = e => {

    let errorEmail, errorPassword = "";
    errorEmail = validateEmail(this.state.email);
    //errorPassword = validatePasswordLength(this.state.password) || validatePasswordContent(this.state.password);

    if(!errorEmail && !errorPassword){
      this.postLogin(e);

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
        <NavLink to={routes.SIGNUP()}>
          Registrarse
        </NavLink>
      </div>
    );
  }
}

export default Login;
