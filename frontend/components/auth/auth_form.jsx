import React from 'react';
import { Link } from 'react-router';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
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
    return (
      <form onSubmit={ this.handleSubmit }>
        <input onChange={ this.update("username") } type="text" value={ this.state.username }></input>
        <input onChange={ this.update("password") } type="password" value={ this.state.password }></input>
        <input type="submit" value="Submit"></input>
      </form>
    );
  }
}

export default AuthForm;
