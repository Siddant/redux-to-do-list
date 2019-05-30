import React from 'react'
import ReactDOM from 'react-dom'

import './scss/style.scss'

import TaskForm from './components/TaskForm'
import Todos from './components/Todos'

class App extends React.Component {
  constructor(){
    super()

    this.state ={
      todos: [{ task: 'Make a todo app', completed: false}],
      newTask: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleCompleted = this.toggleCompleted.bind(this)
  }

  handleChange(e){
    this.setState({ newTask: e.target.value })
    console.log(this.state.newTask)
  }
  handleSubmit(e){
    e.preventDefault()
    const task ={task: this.state.newTask, completed: false}
    console.log(this.state.todos  ===  [...this.state.todos])
    this.setState({todos: [...this.state.todos, task] , newTask: ''})


    //this.state.todos.push(task)
  }
  toggleCompleted(todo){
    console.log(todo)
    const index = this.state.todos.indexOf(todo)
    const toogleTodo ={...todo, completed: !todo.completed}

    const todos =[
      ...this.state.todos.slice(0,index),
      toogleTodo,
      ...this.state.todos.slice(index+1)
    ]
    this.setState({ todos })
  }
  remaningTodos(){
    return this.state.todos.filter(todo => !todo.completed)
  }

  render() {
    return (
      <main>
        <h1>You have {this.remaningTodos().length} thing(s) to do!</h1>
        <ol>
          {this.state.todos.map((elemn,index) =>
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

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
