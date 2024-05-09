import { useState,useEffect, useRef,useReducer  } from 'react';
import '../Styles/home.scss'
import Child from '../components/child';
import React from 'react'

export default class Home extends React.Component {
  constructor(){
    super()
    this.state = {color:'red'}
  }
  render(){
    return (
      <>
        <h2>Home page</h2>
        <h2>class state {this.state.color}</h2>
        <Child color={this.state.color} carModel={'mg'} />
      </>
    )
  }
}
