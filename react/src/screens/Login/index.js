import React, { Component } from 'react';
import './styles.css';

class Login extends Component {
  state = {email: '', password: '', errorEmail: '', errorPassword: ''}
  submitHandler = e => {

    const validator = require("email-validator");
    if(!validator.validate(this.state.email)){
      this.setState({errorEmail: 'El email ingresado no es válido.'});
    }else{
      this.setState({errorEmail: ''});
    }

    if(this.state.password.length < 8 || this.state.password.length > 52){
      this.setState({errorPassword: 'El password debe tener entre 8 y 52 caracteres'});
    }else{
      this.setState({errorPassword: ''});
    }

    if(!this.state.errorEmail && !this.state.errorPassword){
      sessionStorage.setItem('user_session', this.state.email);
    }else{
      e.preventDefault();
    }
  }
  handleEmailChange = (e) => { this.setState({email: e.target.value}); }
  handlePasswordChange = (e) => { this.setState({password: e.target.value}); }

  render() {
    return (
      <div className="login-screen">
        <h1 className="login-title">Login</h1>
        <form className="login-form" onSubmit={this.submitHandler}>
          <div className="login-field">
            <h4 className="login-field-title">Email</h4>
            <input id="email" type="text" className={`login-text ${this.state.errorEmail ? 'login-text-error' : ''}`} value={this.state.email} onChange={this.handleEmailChange}/>
            {this.state.errorEmail ? <p className="error-message">{this.state.errorEmail}</p> : null}
          </div>
          <div className="login-field">
            <h4 className="login-field-title">Password</h4>
            <input id="password" type="password" className={`login-text ${this.state.errorPassword ? 'login-text-error' : ''}`} value={this.state.password} onChange={this.handlePasswordChange} />
            {this.state.errorPassword ? <p className="error-message">{this.state.errorPassword}</p> : null}
          </div>
          <div className="login-submit-container">
            <input type="submit" className="login-submit" value="Enviar" />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
