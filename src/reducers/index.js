import { combineReducers } from 'redux';

import todoReducer from './toDoReducers';
import counterReducer from './counter';

const rootReducer = combineReducers({
	todos: todoReducer,
	counter: counterReducer
});

export default rootReducer;
