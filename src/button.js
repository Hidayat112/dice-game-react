import React, { Component } from 'react';

class Button extends Component {
    render(){
        return(
            <button onClick={function(){alert('clicked')}}>click me!</button>
        )
    }
}

export default Button;
