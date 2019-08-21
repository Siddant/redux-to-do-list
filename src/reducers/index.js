import { combineReducers } from 'redux';

import todoReducer from './toDoReducers'


const rootReducer = combineReducers({
    todos: todoReducer,
});

export default rootReducer;