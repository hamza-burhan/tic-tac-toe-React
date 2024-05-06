import { useState,useEffect, useRef,useReducer  } from 'react';
import '../Styles/home.scss'
import Child from '../components/child';

export default function Home (){
  const initialState = [
    {
      id:1,
      todo: 'one'
    },
    {
      id:2,
      todo: 'two'
    }
  ]
  const reducerFunction = (state,action) => {
    console.log('reducerFunction action: ', action);
    console.log('reducerFunction state: ', state);
    if(action.type >= 2){
      return [...state,{id:3,todo: 'three'}]
    }else{
      return state
    }
    
  }
  const [state, dispatch] = useReducer(reducerFunction, initialState)

  const handleChange = (e) => {
    console.log('e: ', e);
    dispatch({type: e.id})
  }
  return (
    <>
      <h1>Home Page</h1>
      <h2>reducerFunction state </h2>
      {state.map((s,index) => {
        return (
          <div key={s.id}> 
            <input type='checkbox' onChange={() => handleChange(s)} />
            <span>{s.todo}</span>
          </div>
        )
      })}
    </>
  )
}
