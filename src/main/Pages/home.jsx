import { useState,useEffect, useRef,useReducer,lazy, Suspense  } from 'react';
import '../Styles/home.scss'
import Child from '../components/child';
import React from 'react'
import Childkachild from '../components/childkachild';

export default function Home() {

    return (
      <>
        <h2>Home page</h2>
        <Child />
        <Childkachild />
      </>
    )
 
}
