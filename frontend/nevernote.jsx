import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root.jsx';
import configureStore from './store/store.js';

import { login, logout, signup } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
	const root = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store={ store } />, root);

	window.store = store;
});

window.login = login;
window.logout = logout;
window.signup = signup;
