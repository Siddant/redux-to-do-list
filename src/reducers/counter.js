import { handleAction, next } from 'redux-actions';

let initState = 0;

// const counterReducer = handleAction(
// 	'APP/COUNTER/INCREMENT',
// 	(state, action) => {
// 		console.log(state);
// 		return state + action.payload.amount;
// 	},
// 	initState
// );

const counterReducer = handleAction(
	'SIMPLE_ACTION',
	{
		next(state, action) {
			return action.payload || null;
		},
		throw(state, action) {
			return { errro: action.payload };
		}
	},
	initState
);

export default counterReducer;
