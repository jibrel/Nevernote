import React from 'react';

import { RECEIVE_MESSAGES } from '../actions/messages_actions.js';

const messagesReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_MESSAGES:
      return action.messages;
    default:
      return state;
  }
};

export default messagesReducer;
