import React from 'react';
import merge from 'lodash/merge';

import { RECEIVE_SHORTCUTS, RECEIVE_SHORTCUT, REMOVE_SHORTCUT } from '../actions/shortcuts_actions.js';

const ShortcutReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_SHORTCUTS:
      return action.shortcuts;
    case RECEIVE_SHORTCUT:
      newState[action.shortcut.id] = action.shortcut;
      return newState;
    case REMOVE_SHORTCUT:
      delete newState[action.shortcutId];
      return newState;
    default:
      return state;
  }
};

export default ShortcutReducer;
