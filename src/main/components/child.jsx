import { useContext, useState,memo } from 'react';
import ChildKaChild from './childkachild.jsx';
import {CustomContext} from '../../index'
import React from 'react'
 class Child extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <>
          <h2>First Child </h2>
          <h2>props from parent {this.props.color}</h2>

      </>
    )
  }
   
  }

  export default Child
  