import React from 'react';
import merge from 'lodash/merge';

newState = merge({}, state)

case RECEIVE_ERRORS:
  const form = newState[action.formName];
  form.errors = action.errors;
  return newState;
