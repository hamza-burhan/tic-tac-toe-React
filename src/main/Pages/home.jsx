import { useState,useEffect  } from 'react';
import '../Styles/home.scss'
import Child from '../components/child';
import {CustomContext} from '../../index'

export default function Home (){
  const [count,setCount] = useState(0)
  
  return (
    <>
      <h1>Home Page</h1>
      <CustomContext.Provider value={[ count, setCount ]}>
        <Child />
      </CustomContext.Provider>
    </>
  )
}
