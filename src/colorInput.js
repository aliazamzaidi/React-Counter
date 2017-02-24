import React, {Component} from 'react';

class InputField extends Component {
    constructor(props){
        super(props);
    this.state({
        color: 'black'
    })
    this.inputFieldText = this.inputFieldText.bind(this);
}

    inputFieldText(){
        this.setState({
           color : this.refs.textInputColor.value
        })
    }

    render(){
        return (
            <div>
                <input type='text' placeholder='Enter Any Color' style={{marginTop:'4px',border:0}} onChange={this.inputFieldText} ref={textInputColor}></input>
            </div>
        )
    }
}

export default InputField;