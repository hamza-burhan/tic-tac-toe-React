import { useState,useEffect, useRef  } from 'react';
import '../Styles/home.scss'
import Child from '../components/child';

export default function Home (){
  const refCouter = useRef(0)
  const input = useRef()
  const trackprevious = useRef(0)
  const [count,setcount] = useState(0)
  const [anotherCount,setanotherCount] = useState(0)

  useEffect(() => {
    setanotherCount( prev => prev + 1)
    refCouter.current = refCouter.current +  1
    trackprevious.current = anotherCount
  },[count])


  console.log("rerender",count)
  console.log("refCouter",refCouter.current)


  const handldeClick = () => {
    setcount(prev => prev + 1)
  }

  const handleInput = (e) => {
    console.log('e: ', input.current.blur());
  }

  return (
    <>
      <h1>Home Page</h1>
      <h2>use Ref {count}</h2>
      <h2>another state {anotherCount}</h2>
      <h2>ref counter {refCouter.current}</h2>
      <h2>trackprevious ref {trackprevious.current}</h2>


      <button onClick={handldeClick} >click</button>
      <br/>
      <input type='text' ref={input} onChange={handleInput} />
      
    </>
  )
}
