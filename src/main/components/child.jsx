import { useContext, useState,memo } from 'react';
import ChildKaChild from './childkachild.jsx';
import {CustomContext} from '../../index'
import React from 'react'
 function Child({sendData}){
  const handleChange = (e) => {
    sendData(e.target.value)
  }

    return (
      <>
          <h2>First Child </h2>
          <label>Child Input</label>
          <input type="text" onChange={handleChange}/>
      </>
    )
  }

  export default Child
  