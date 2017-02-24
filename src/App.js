import React, { Component } from 'react';
import logo from './logo.svg';
// import InputField from './colorInput'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter:0,
      myColor: 'brown'
    }
     this.increment = this.increment.bind(this)
     this.decrement = this.decrement.bind(this)
     this.onColorChange = this.onColorChange.bind(this)
  }

  onColorChange(){
    this.setState({
      myColor: this.refs.textInInputArea.value
    })
  }

  increment(){
    this.setState(
      {
        counter: this.state.counter + 1
      }
    )
  }
  

  decrement(){
    this.setState(
      {
        counter: this.state.counter - 1
      }
    )

  if(this.state.counter <= 0){
        this.setState({
          counter: 0
        })
      }
  
  }

  render() {
    return (
     <div>
       <h1 id='counter' style={{color:this.state.myColor}}>Counter</h1>
      <button onClick={this.increment}>+</button>
       <p>{this.state.counter}</p>
       <button onClick={this.decrement}>-</button>
       <br />
       <br />
       <input type="text" placeholder='Enter Any Color' onChange={this.onColorChange} ref='textInInputArea'/>
      </div>
    );
  }
}

export default App;
  