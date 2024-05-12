import { useState,useEffect, useRef,useReducer,lazy, Suspense  } from 'react';
import '../Styles/home.scss'
// import Child from '../components/child';
import React from 'react'

export default function Home() {
  const Child = lazy(() => import('../components/child'))

  const [model,setModel] = useState(false)
    return (
      <>
        <h2>Home page</h2>
        <button onClick={() => setModel(true)}>click</button>

        <Suspense fallback={<p>loading.....</p>}>
          {model && <Child />}
        </Suspense>
        
      </>
    )
 
}
