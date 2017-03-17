import { combineReducers } from 'redux';

import SessionReducer from './session_reducer.js';
import ErrorsReducer from './errors_reducer.js';
import NotesReducer from './notes_reducer.js';
import NoteDetailReducer from './note_detail_reducer.js';

const RootReducer = combineReducers({
	currentUser: SessionReducer,
	errors: ErrorsReducer,
	notes: NotesReducer,
	currentNote: NoteDetailReducer
});

export default RootReducer;
