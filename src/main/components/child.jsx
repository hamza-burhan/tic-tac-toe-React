import { useContext, useState,memo } from 'react';
import ChildKaChild from './childkachild.jsx';
import {CustomContext} from '../../index'
import React from 'react'
import  ReactDOM  from 'react-dom';
import HighOrder from '../Pages/HighOrder.jsx';
 
function Child(){
  const [count, setCount] = useState(0);

  const increaseCounter = () => {
    setCount(count + 1)
  }
  if(count > 3){
    throw new Error("custom error")
  }
      return (
      <>
          <h2>First Child </h2>
          <h3>counter: {count}</h3>
          <button onClick={increaseCounter}>click</button>
      </>
    )
  }
  

  export default Child
  