import { combineReducers } from 'redux';

import SessionReducer from './session_reducer.js';
import FormsReducer from './forms_reducer.js';

const RootReducer = combineReducers({
	currentUser: SessionReducer,
	forms: FormsReducer
});

export default RootReducer;
