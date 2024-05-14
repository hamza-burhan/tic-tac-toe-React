import { useContext, useState,memo } from 'react';
import ChildKaChild from './childkachild.jsx';
import {CustomContext} from '../../index'
import React from 'react'
import  ReactDOM  from 'react-dom';
import HighOrder from '../Pages/HighOrder.jsx';
 
function Child({counter, handleCounter}){

      return (
      <>
          <h2>First Child </h2>
          <h3>Count comming from High Order {counter} </h3>
          <button onClick={handleCounter}>Click</button>
      </>
    )
  }
  

  export default HighOrder(Child)
  