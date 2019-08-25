import { handleAction, next } from 'redux-actions';

let initState = 0;

const counterReducer = handleAction(
	'APP/COUNTER/INCREMENT',
	(state, action) => {
		console.log(state);
		return state + action.payload.amount;
	},
	initState
);

// const counterReducer = handleAction(
// 	'APP/COUNTER/INCREMENT',
//     next() {
//         return null;
//       },
//       throw(state, { payload: { message } }) {
//         return message;
//       },
// 	initState
// );

export default counterReducer;
