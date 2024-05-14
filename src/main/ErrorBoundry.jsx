import React, { Component } from 'react'

export default class ErrorBoundry extends Component {
    constructor(props) {
        super(props)
        this.state = {er: false}
    }
    static getDerivedStateFromError(error) {
        return {er: true}
    }

    componentDidCatch(error,errorinfo){
        console.error(error)
    }
  render() {
    if(this.state.er){
        return this.props.fallback
    }
    return this.props.children
    
  }
}
