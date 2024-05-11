import React from 'react'
import { useDispatch } from 'react-redux'
import { remove } from '../store/todoSlice'

export default function AddTodo({todo}) {
    const dispatch = useDispatch()
    const handleClick = (id) => {
        dispatch(remove(id))
    }
  return (
    <div >
      <span style={{color: 'blue'}}>{todo.text}</span>
      <button onClick={() => handleClick(todo.id)}>X</button>
    </div>
  )
}
