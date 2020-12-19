import React, { useState, useContext } from 'react'
import {TodoContext} from './TodoContext'

const Todo = ({ todo }) => {
  const [done, setDone] = useState(todo.done)
  const { doneTodosContext } = useContext(TodoContext)
  const [doneTodos, setDoneTodos] = doneTodosContext

  const updateDone = e => {
    if(e.target.checked) {
      setDone(true)
      setDoneTodos(prevDone => {
        const inc = prevDone + 1
        return inc
      })
    }
    else {
      setDone(false)
      setDoneTodos(prevDone => {
        const dec = prevDone - 1
        return dec
      })
    }
  }


  return (
    <div>
      <input type="checkbox" onChange={updateDone} checked={done}/>
      {todo.name}
    </div>
  )
}

export default Todo
