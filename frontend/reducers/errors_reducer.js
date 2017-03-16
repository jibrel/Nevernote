import React from 'react';
import merge from 'lodash/merge';

import { RECEIVE_ERRORS } from '../actions/errors_actions.js';

const nullErrors = Object.freeze({
  signup: [],
  login: [],
  main: []
});

const errorsReducer = (state = nullErrors, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      newState[action.formName] = action.errors
      console.log(action.errors) // REMOVE LATER!!!
      return newState;
    default:
      return state;
  }
};

export default errorsReducer;
