import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app.jsx';
import AuthFormContainer from './auth/auth_form_container.js';

const Root = ({ store }) => {
  const ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().currentUser.username;
    if (!currentUser) {
      replace("/login");
    }
  };

  const redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().currentUser.username;
    if (currentUser) {
      replace("/");  // change to "/home"
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <Route path="/signup" component={ AuthFormContainer } onEnter={ redirectIfLoggedIn } />
          <Route path="/login" component={ AuthFormContainer } onEnter={ redirectIfLoggedIn } />

        </Route>
      </Router>
    </Provider>
  )
};

export default Root;
