import { createAction, createActions } from 'redux-actions';
import axios from 'axios';

// export function increment(lol) {
// 	return {
// 		type: 'increment_likes',
// 		payload: lol
// 	};
// }

// export function toggleList(todo) {
// 	return {
// 		type: 'toggle_todo',
// 		payload: todo
// 	};
// }

// export const teting = (lol) => {
// 	return {
// 		type: 'SIMPLE_ACTION',
// 		payload: lol
// 	};
// 	// dispatch({
// 	//  type: 'SIMPLE_ACTION',
// 	//  payload: lol
// 	// })
// };

// export const simpleAction = () => (dispatch) => {
// 	dispatch({
// 		type: 'SIMPLE_ACTION',
// 		payload: 'result_of_simple_action'
// 	});
// };

export const incrementStuff = createAction('INCREMENT');
export const increment = createAction('increment_likes');
export const toggleList = createAction('toggle_todo');
// export const teting = createAction('SIMPLE_ACTION', (test) => test, () => true);

// export const teting = createAction(
// 	'SIMPLE_ACTION',
// 	() => {
// 		return { task: 'err', completed: false };
// 	},
// 	() => true
// );

export const teting = createAction('SIMPLE_ACTION', (payload) => payload);

// action map
export const actionMapExample = createActions({
	ADD_TODO: (todo) => ({ todo }), // payload creator
	REMOVE_TODO: [
		(todo) => ({ todo }), // payload creator
		(todo, warn) => ({ todo, warn }) // meta
	]
});

export const actionCreatorsExample2 = createActions({
	APP: {
		COUNTER: {
			INCREMENT: [ (amount) => ({ amount }), (amount) => ({ key: 'value', amount }) ],
			DECREMENT: (amount) => ({ amount: -amount }),
			SET: undefined // given undefined, the identity function will be used
		},
		NOTIFY: [
			(username, message) => ({ message: `${username}: ${message}` }),
			(username, message) => ({ username, message })
		]
	}
});

export const { actionOne, actionTwo, actionThree } = createActions(
	{
		// function form; payload creator defined inline
		ACTION_ONE: (key, value) => ({ [key]: value }),

		// array form
		ACTION_TWO: [
			(first) => [ first ], // payload
			(first, second) => ({ first, second }) // meta
		]

		// trailing action type string form; payload creator is the identity
	},
	'ACTION_THREE'
);

// success

// export const getTodoApi = () => (dispatch) => {
// 	axios
// 		.get(`https://jsonplaceholder.typicode.com/todos/1`)
// 		.then((res) => {
// 			dispatch(teting(res.data));
// 		})
// 		.catch((res) => dispatch(teting(res)));
// };

// eroor

export const getTodoApi = () => (dispatch) => {
	axios
		.get(`https://jsonplaceholder.typicode.com/tosdos/1`)
		.then((res) => {
			dispatch(teting(res.data));
		})
		.catch((res) => dispatch(teting(res)));
};
