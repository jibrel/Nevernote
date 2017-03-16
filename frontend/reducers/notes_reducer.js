import React from 'react';
import merge from 'lodash/merge';

import { RECEIVE_NOTES, RECEIVE_NOTE } from '../actions/notes_actions.js';

const nullNote = Object.freeze({
  id: null,
  title: null,
  body: null,
  author_id: null,
  notebook_id: null,
  tags: {}
});

const NotesReducer = (state = { 0: nullNote }, action) => {
  Object.freeze(state);
  const newState = merge({}, state)
  switch(action.type) {
    case RECEIVE_NOTES:
      return action.notes;
    case RECEIVE_NOTE:
      newState[action.note.id] = action.note;
      return newState;
    default:
      return state;
  }
};

export default NotesReducer;
