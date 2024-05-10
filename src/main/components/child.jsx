import { useContext, useState,memo } from 'react';
import ChildKaChild from './childkachild.jsx';
import {CustomContext} from '../../index'
import React from 'react'
 class Child extends React.Component{
  constructor(props){
    super(props)
    this.state = {model: 'vigo'}
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({model: 'dala'})
    },2000)
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    document.getElementById('div1').innerHTML = prevState.model
  }

  componentDidUpdate(){
    document.getElementById('div2').innerHTML = this.state.model
  }

 

  
  render(){
    return (
      <>
          <h2>First Child </h2>
          <p>curernt state {this.state.model}</p>
          <div id='div1'></div>
          <div id='div2'></div>

      </>
    )
  }
   
  }

  export default Child
  