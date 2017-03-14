import { combineReducers } from 'redux';

import SessionReducer from './session_reducer.js';
import ErrorsReducer from './errors_reducer.js';

const RootReducer = combineReducers({
	currentUser: SessionReducer,
	errors: ErrorsReducer
});

export default RootReducer;
