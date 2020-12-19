import React, {useContext} from 'react'
import {TodoContext} from './TodoContext'

const Nav = () => {
  const { todosContext, doneTodosContext } = useContext(TodoContext)
  const [todos, setTodos] = todosContext
  const [doneTodos, setDoneTodos] = doneTodosContext
  
  return (
    <div>
      <p>
      You have {todos.length} todos
      </p>

      <p>
      You have {doneTodos} completed todos
      </p>
    </div>
  )
}

export default Nav
