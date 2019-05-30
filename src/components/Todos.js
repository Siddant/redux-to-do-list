import React from 'react'

const Todos = ({ task, completed, onClick}) => {
  return (
    <li className={completed ? 'completed': ''} onClick={onClick} >{task}</li>
  )
}

export default Todos
