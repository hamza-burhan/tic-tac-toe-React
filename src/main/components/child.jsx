import { useContext, useState } from 'react';
import ChildKaChild from './childkachild.jsx';
import {CustomContext} from '../../index'

export default function Child (){
  const [count,setCount] = useContext(CustomContext)
  const handleCLick = (e) => {
    setCount(pre => count + 1)
    console.log('count: ', count);
  }
    return (
      <>
          <h2>First Child</h2>
          <button onClick={handleCLick} >increase context counter</button>
          <ChildKaChild />
      </>
    )
  }
  