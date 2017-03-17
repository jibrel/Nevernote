import React from 'react';
import { Link } from 'react-router';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
    this.handleDemo = this.handleDemo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

  redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/home");
		}
	}

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  handleDemo(e) {
    e.preventDefault();
    this.setState({
      username: "DemoUser",
      password: "password123"
    }, () => {
      setTimeout(() => this.props.login({ user: this.state }), 500)
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({ user });
  }

  renderErrors() {
    if (this.props.errors[this.props.formType][0]) {
      return (
        <div className="auth-errors">
          <p>{ this.props.errors[this.props.formType][0] }</p>
        </div>
      );
    }
    else {
      return undefined;
    }
  }

  render() {
    const newUser = (this.props.formType === "signup");

    const header = (newUser) ? "Create Account" : "Sign in";
    const usernamePlaceholder = "Your username";
    const pwPlaceholder = (newUser) ? "Create a password" : "Password";
    const buttonText = (newUser) ? "Create Account" : "Sign in";
    const question = (newUser) ? "Already have an account?" : "Don't have an account?";
    const navLink = (newUser) ? "/login" : "/signup";
    const linkText = (newUser) ? "Sign in" : "Create account";

    return (
      <div className="auth">
        <h2 className="auth-header">{ header }</h2>
        <form onSubmit={ this.handleSubmit } className="auth-form">
          <button onClick={ this.handleDemo } className="demo-button">Sign in as Guest</button>
          <input onChange={ this.update("username") } className="auth-input" type="text" placeholder={ usernamePlaceholder } value={ this.state.username }></input>
          { this.renderErrors() }
          <input onChange={ this.update("password") } className="auth-input" type="password" placeholder={ pwPlaceholder } value={ this.state.password }></input>
          <input className="auth-button" type="submit" value={ buttonText }></input>
        </form>
        <p>{ question }</p>
        <Link to={ navLink } className="auth-link">{ linkText }</Link>
      </div>
    );
  }
}

export default AuthForm;
