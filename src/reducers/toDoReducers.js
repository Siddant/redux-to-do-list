import { handleActions } from 'redux-actions';

let initState = [];

const todoReducer = (state = initState, action) => {
	switch (action.type) {
		case 'increment_likes':
			state = [ ...state, action.payload ];
			return state;
		case 'toggle_todo':
			const index = state.indexOf(action.payload);
			const toogleTodo = { ...action.payload, completed: !action.payload.completed };
			return [ ...state.slice(0, index), toogleTodo, ...state.slice(index + 1) ];
		case 'SIMPLE_ACTION':
			console.log('herer');
			return state;
		default:
			return state;
	}
};

// handleActions

// const todoReducer = handleActions(
// 	{
// 		increment_likes: (state, action) => [ ...state, action.payload ],
// 		toggle_todo: (state, action) => {
// 			const index = state.indexOf(action.payload);
// 			const toogleTodo = { ...action.payload, completed: !action.payload.completed };
// 			return [ ...state.slice(0, index), toogleTodo, ...state.slice(index + 1) ];
// 		}
// 	},
// 	initState
// );

// const todoReducer = handleActions(
// 	new Map([
// 		[ 'increment_likes', (state, action) => [ ...state, action.payload ] ],

// 		[
// 			'toggle_todo',
// 			(state, action) => {
// 				const index = state.indexOf(action.payload);
// 				const toogleTodo = { ...action.payload, completed: !action.payload.completed };
// 				return [ ...state.slice(0, index), toogleTodo, ...state.slice(index + 1) ];
// 			}
// 		]
// 	]),
// 	initState
// );

// const todoReducer = handleActions(
// 	{
// 		['increment_likes'](state, action) {
// 			return [ ...state, action.payload ];
// 		},
// 		['toggle_todo'](state, action) {
// 			const index = state.indexOf(action.payload);
// 			const toogleTodo = { ...action.payload, completed: !action.payload.completed };
// 			return [ ...state.slice(0, index), toogleTodo, ...state.slice(index + 1) ];
// 		}
// 	},
// 	initState
// );

export default todoReducer;
