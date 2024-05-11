import React, { useState } from 'react'
import AddTodo from '../components/AddTodo'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../store/todoSlice'

export default function Todo() {
    const [input,setInput] = useState('')
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const handleInput = (e) => {
        setInput(e.target.value)
    }
    const handleAdd = (e) => {
        dispatch(add(input))
        setInput('')
    }
  return (
    <div>
      <h1>Todo</h1>
      <input type='text' value={input} onChange={handleInput} />
      <button onClick={handleAdd}>Add</button>
      {todos.map((todo) => {
        return <AddTodo todo={todo} key={todo.id}/>
      })}
      
    </div>
  )
}
