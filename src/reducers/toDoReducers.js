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

export default todoReducer;
