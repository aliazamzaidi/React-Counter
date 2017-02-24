import React, { Component } from 'react';

class Link extends Component{
    render(){
     return (
     <a href={this.props.url}>{this.props.label}</a>
     )
    }
}

export default Link;