import React, { useState, createContext } from 'react'

export const TodoContext = createContext()

export const TodoProvider = props => {
  const [todos, setTodos] = useState([
    {
      name: "Learn React",
      done: true
    },
    {
      name: "Learn React-native",
      done: false
    },
    {
      name: "Learn Laravel",
      done: false
    },
    {
      name: "Learn Java",
      done: false
    },
  ])

  const numTodos = () => {
    let num = 0
    todos.map(todo => todo.done && num++)
    console.log(num);
    return num
  }

  const [doneTodos, setDoneTodos] = useState(numTodos())

  return (
    <TodoContext.Provider value={{todosContext: [todos, setTodos], doneTodosContext: [doneTodos, setDoneTodos]}}>
      { props.children }
    </TodoContext.Provider>
  )
}


