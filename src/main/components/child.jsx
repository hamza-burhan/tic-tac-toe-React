import { useContext, useState,memo } from 'react';
import ChildKaChild from './childkachild.jsx';
import {CustomContext} from '../../index'
import React from 'react'
 class Child extends React.Component{
  constructor(props){
    super(props)
    this.state = {model: 'vigo'}
  }
  static getDerivedStateFromProps(props,state){
    return {model: props.carModel}
  }
  componentDidMount() {
      this.setState({ model: 'dala' })
      console.log('this.state.model in setState callback: componentDidMount', this.state.model);
    
  }
  render(){
    return (
      <>
          <h2>First Child </h2>
          <h2>props from parent {this.props.color}</h2>
          <h2>state changed by props and after mounting {this.state.model}</h2>



      </>
    )
  }
   
  }

  export default Child
  