import React, { useContext } from 'react'
import Todo from './Todo'
import {TodoContext} from './TodoContext'

const TodoList = () => {
  const { todosContext } = useContext(TodoContext)
  const [todos, setTodos] = todosContext
  return (
      todos.map((todo, key) => (
        <Todo key={key} todo={todo}/>
      ))
  )
}

export default TodoList
