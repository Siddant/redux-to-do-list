import React from 'react';
import './scss/style.scss';

import TaskForm from './components/TaskForm';
import Todos from './components/Todos';

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';
import * as actionCreators from './actions/index';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			newTask: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.toggleCompleted = this.toggleCompleted.bind(this);
		this.hanldeClick = this.hanldeClick.bind(this);

		actionCreators.incrementStuff();
	}
	componentDidMount() {
		console.log(this.props.state);
	}

	handleChange(e) {
		this.setState({ newTask: e.target.value });
	}
	handleSubmit(e) {
		e.preventDefault();
		const task = { task: this.state.newTask, completed: false };
		this.props.increment(task);
		this.setState({ newTask: '' });
	}

	hanldeClick(e) {
		// this.props.actionOne('test', 1);
		// this.props.actionTwo('test1', 2);
		// this.props.actionThree();
		// this.props.increment('2');
		// this.props.teting('tetst');
		// this.props.actionMapExample('lol');
		// this.props.removeActionMapExample('testig');
		this.props.incrementCounter(1);
	}

	toggleCompleted(todo) {
		this.props.toggleList(todo);
	}

	remaningTodos() {
		return this.props.state.filter((todo) => !todo.completed);
	}

	render() {
		return (
			<main>
				<h1>You have {this.remaningTodos().length} thing(s) to do!</h1>
				<ol>
					{this.props.state.map((elemn, index) => (
						<Todos
							key={index}
							{...elemn}
							toggleCompleted={this.toggleCompleted}
							onClick={() => this.toggleCompleted(elemn)}
						/>
					))}
				</ol>

				<TaskForm
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
					newTask={this.state.newTask}
				/>
				<button onClick={this.hanldeClick}>Add</button>
				<button>Increment</button>
				<button>Decrement</button>
				<button>doStuff</button>
			</main>
		);
	}
}

function mapStateToProps(state) {
	return {
		state: state.todos
	};
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(actionCreators, dispatch);
// }

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		increment: (id) => dispatch(actionCreators.increment(id)),
// 		teting: (id) => dispatch(actionCreators.teting(id)),
// 		toggleList: (id) => dispatch(actionCreators.toggleList(id))
// 	};
// };

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		increment: (id) => dispatch(actionCreators.increment(id)),
// 		teting: (id) => dispatch(actionCreators.teting(id)),
// 		toggleList: (id) => dispatch(actionCreators.toggleList(id))
// 	};
// };

const mapDispatchToProps = {
	increment: actionCreators.increment,
	teting: actionCreators.teting,
	toggleList: actionCreators.toggleList,
	actionMapExample: actionCreators.actionMapExample.addTodo,
	removeActionMapExample: actionCreators.actionMapExample.removeTodo,
	incrementCounter: actionCreators.actionCreatorsExample2.app.counter.increment,
	actionOne: actionCreators.actionOne,
	actionTwo: actionCreators.actionTwo,
	actionThree: actionCreators.actionThree
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
