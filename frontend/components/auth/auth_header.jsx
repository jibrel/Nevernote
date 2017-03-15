import React from 'react';

const AuthHeader = (props) => (
  <h2>{ (props.formType === "signup") ? "Create Account" : "Sign in" }</h2>
);

export default AuthHeader;
