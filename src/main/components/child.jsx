import { useContext, useState,memo } from 'react';
import ChildKaChild from './childkachild.jsx';
import {CustomContext} from '../../index'
import React from 'react'
import  ReactDOM  from 'react-dom';
 function Child(){
    return (
      <>
          <h2>First Child </h2> 
          {ReactDOM.createPortal(
        <p>This child is placed in the document body.</p> ,
        document.getElementById('sroot')
      )}
      </>
    )
  }

  export default Child
  