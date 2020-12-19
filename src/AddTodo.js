import React, { useState, useContext } from 'react'
import { TodoContext } from './TodoContext'

const AddTodo = () => {
  const { todosContext } = useContext(TodoContext)
  const [todos, setTodos] = todosContext
  const [name, setName] = useState('')
  const updateName = e => {
    setName(e.target.value)
  }

  const addTodo = e => {
    e.preventDefault()
    setTodos(prevTodos => [...prevTodos, {name, done: false}])
  }

  return (
    <form onSubmit={addTodo}>
      <input type="text" value={name} onChange={updateName} placeholder="Enter your todo item"/>
      <input type="submit"/>
    </form>
  )
}

export default AddTodo
