import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app.jsx';
import AuthFormContainer from './auth/auth_form_container.js';
import HomeContainer from './home/home_container.js';
import NoteDetailContainer from './note_detail/note_detail_container.js';
import NotebookIndexContainer from './notebook_index/notebook_index_container.js';
import FormContainer from './form/form_container.js';

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
      replace("/home");
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <Route path="/signup" component={ AuthFormContainer } onEnter={ redirectIfLoggedIn } />
          <Route path="/login" component={ AuthFormContainer } onEnter={ redirectIfLoggedIn } />
        </Route>

        <Route path="/home" component={ HomeContainer } onEnter={ ensureLoggedIn }>
          <Route path="/note/:noteId" component={ NoteDetailContainer } onEnter={ ensureLoggedIn } />
          <Route path="/notebooks" component={ NotebookIndexContainer } onEnter={ ensureLoggedIn } />
        </Route>

        <Route path="/new-notebook" component={ FormContainer } onEnter={ ensureLoggedIn } />
        <Route path="/new-tag" component={ FormContainer } onEnter={ ensureLoggedIn } />
      </Router>
    </Provider>
  );
};

export default Root;
