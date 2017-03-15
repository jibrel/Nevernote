import React from 'react';
import { Link } from 'react-router';

import AuthHeader from './auth_header.jsx';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

  redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/"); // change to "/home"
		}
	}

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({ user });
  }

  render() {
    const usernamePlaceholder = "Your username";
    const pwPlaceholder = (this.props.formType === "signup") ? "Create a password" : "Password";
    const buttonText = (this.props.formType === "signup") ? "Create Account" : "Sign in";

    return (
      <div>
        <AuthHeader props={ this.props.formType }/>
        <form onSubmit={ this.handleSubmit } className="auth-form">
          <input onChange={ this.update("username") } className="auth-input" type="text" placeholder={ usernamePlaceholder } value={ this.state.username }></input>
          <input onChange={ this.update("password") } className="auth-input" type="password" placeholder={ pwPlaceholder } value={ this.state.password }></input>
          <input type="submit" value={ buttonText }></input>
        </form>
      </div>
    );
  }
}

export default AuthForm;
