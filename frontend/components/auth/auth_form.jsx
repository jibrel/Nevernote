import React from 'react';
import { Link } from 'react-router';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
    this.newUser = (this.props.formType === "signup");
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

  redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
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
    const header = (this.newUser) ? "Create Account" : "Sign in";
    const usernamePlaceholder = "Your username";
    const pwPlaceholder = (this.newUser) ? "Create a password" : "Password";
    const buttonText = (this.newUser) ? "Create Account" : "Sign in";
    const question = (this.newUser) ? "Already have an account?" : "Don't have an account?";
    const navLink = (this.newUser) ? "/login" : "/signup";
    const linkText = (this.newUser) ? "Sign in" : "Create Account";

    return (
      <div className="auth">
        <h2 className="auth-header">{ header }</h2>
        <form onSubmit={ this.handleSubmit } className="auth-form">
          <input onChange={ this.update("username") } className="auth-input" type="text" placeholder={ usernamePlaceholder } value={ this.state.username }></input>
          <input onChange={ this.update("password") } className="auth-input" type="password" placeholder={ pwPlaceholder } value={ this.state.password }></input>
          <input className="auth-button" type="submit" value={ buttonText }></input>
        </form>
        <p>{ question }</p>
        <Link to={ navLink }>{ linkText }</Link>
      </div>
    );
  }
}

export default AuthForm;
