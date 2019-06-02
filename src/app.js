import React from 'react'
import './scss/style.scss'

import TaskForm from './components/TaskForm'
import Todos from './components/Todos'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/index';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      newTask: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleCompleted = this.toggleCompleted.bind(this)
  }

  handleChange(e) {
    this.setState({ newTask: e.target.value })
  }
  handleSubmit(e) {
    e.preventDefault()
    const task = { task: this.state.newTask, completed: false }
    this.props.increment(task)
    this.setState({ newTask: '' })
  }


  toggleCompleted(todo) {
    this.props.toggleList(todo)
  }


  remaningTodos() {
    return this.props.todos.filter(todo => !todo.completed)
  }

  render() {
    return (

      <main>
        <h1>You have {this.remaningTodos().length} thing(s) to do!</h1>
        <ol>
          {this.props.todos.map((elemn, index) =>
            <Todos
              key={index}
              {...elemn}
              toggleCompleted={this.toggleCompleted}
              onClick={() => this.toggleCompleted(elemn)}
            />)}
        </ol>

        <TaskForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          newTask={this.state.newTask}
        />
      </main>
    )
  }
}



function mapStateToProps(state) {
  return {
    todos: state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App)