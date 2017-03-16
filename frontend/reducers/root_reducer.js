import { combineReducers } from 'redux';

import SessionReducer from './session_reducer.js';
import ErrorsReducer from './errors_reducer.js';
import NotesReducer from './notes_reducer.js';

const RootReducer = combineReducers({
	currentUser: SessionReducer,
	errors: ErrorsReducer,
	notes: NotesReducer
});

export default RootReducer;
