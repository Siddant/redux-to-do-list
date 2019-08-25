import { handleAction } from 'redux-actions';

let initState = 0;

const counterReducer = handleAction(
	'APP/COUNTER/INCREMENT',
	(state, action) => {
		console.log(state);
		return state + action.payload.amount;
	},
	initState
);

// const counterReducer = handleActions(
// 	{
// 		['APP/COUNTER/INCREMENT'](state) {
// 			return state + 1;
// 		}
// 	},
// 	initState
// );

export default counterReducer;
