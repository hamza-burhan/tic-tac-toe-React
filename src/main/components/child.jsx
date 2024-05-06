import { useContext, useState,memo } from 'react';
import ChildKaChild from './childkachild.jsx';
import {CustomContext} from '../../index'

 function Child ({count,handleClick}){
  console.log('Child renders')
    return (
      <>
          <h2>First Child {count}</h2>
          <button onClick={handleClick}>child click</button>
      </>
    )
  }

  export default memo(Child)
  