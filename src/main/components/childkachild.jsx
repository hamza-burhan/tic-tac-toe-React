import { useState,useContext } from 'react';
import {CustomContext} from '../../index'

export default function ChildKaChild (){
    const [count,setCount] = useContext(CustomContext)
    return (
      <>
        <h2>Second Child</h2>
        <p>Counter: {count}</p>
      </>
    )
  }