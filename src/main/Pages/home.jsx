import { useState,useEffect, useRef,useReducer, useCallback  } from 'react';
import '../Styles/home.scss'
import Child from '../components/child';

export default function Home (){
  const [count, setCount] = useState(0)
  const [anotherCount, setanotherCount] = useState(0)

  const handleClick = useCallback(() => {
    console.log('event')
  },[anotherCount])

  const increase = () => {
    setCount(pre => pre + 1)
  }
  return (
    <>
      <h1>Home Page</h1>
      <Child count={anotherCount} handleClick={handleClick} />
      <h2>Counter {count}</h2>
      <button onClick={increase}>parent Click</button>
    </>
  )
}
