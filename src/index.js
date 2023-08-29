import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


class Student extends React.Component {
  //constructor and props
  constructor(props){
    //super method
    super(props)
    //state Object
    this.state = {
      name: "Hamza",
      class:"A",
      color:"red",
      componentDidMount:"true",
      getDerivedStateFromProps:"red"
    }
  }

  //getDerivedStateFromProps method runs 
  static getDerivedStateFromProps(props, state){
    return {
      color: props.color,
      getDerivedStateFromProps: props.getDerivedStateFromProps
    }
  }

  //componentDidMount() runs after dom is renderd so we can change things after
  componentDidMount(){
    setTimeout(()=>{
      this.setState({componentDidMount:"false"})
    },2000)
  }
  changeName = () => {
    //setState method to change state
    this.setState({name:'Burhan'})
  }
  changestate = () => {
    //setState method to change state
    this.setState({getDerivedStateFromProps:'green'})
  }
  //render method that render html
  render(){
    return(
      <div>
        <h1>Hello Im class component</h1>
        <h1>Hello im props: {this.props.class}</h1>
        <h1>Hello im state change: {this.state.name}</h1>
        <button type='button' onClick={this.changeName}>State Change</button>
        <h1>Im getDerivedStateFromProps state: {this.state.color}</h1>
        <h1>Im componentDidMount state: {this.state.componentDidMount}</h1>
        <h1>Im getDerivedStateFromProps with button state: {this.state.getDerivedStateFromProps}</h1>
        <button type='button' onClick={this.changestate}>State Change</button>
        <Hamza />
      </div>
    )
  }
}


//child class component
class Hamza extends React.Component{
  render(){
    return(
      <div>
        <h1>Im child</h1>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Student class='red' color="green" getDerivedStateFromProps="yellow" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
