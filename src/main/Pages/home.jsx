import { useState,useEffect, useRef,useReducer  } from 'react';
import '../Styles/home.scss'
import Child from '../components/child';
import React from 'react'

export default function Home() {
  const [childData,setChildData] = useState('')

  const handleChildData = (data) => {
    setChildData(data)
  }
    return (
      <>
        <h2>Home page</h2>
        <h3>input data coming from child:: {childData}</h3>
        <Child sendData={handleChildData} />
      </>
    )
 
}
