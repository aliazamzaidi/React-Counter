import React, { Component } from 'react';
// import './Counter.css'


class App extends Component{
    constructor(props){
        super(props)

            this.state = {count: 0 }
            this.increment = this.increment.bind(this);
            this.decrement = this.decrement.bind(this);
    }
    increment(){
        this.setState({
            count: this.state.count + 1
        })
        
    }
    decrement(){
        this.setState({
            count: this.state.count - 1
        })
    }
     render(){
         return(
             <div>
                 <h1 style={{color :this.props.data}}>Counter</h1>
             <button type="button" onClick={this.increment}>+</button>
             <button type="button" onClick={this.decrement}>-</button>
             <h1>{this.state.count}</h1>
             </div>
         )
     }
}

export default App 