import React, { Component } from 'react';
import './dice.css';


class Dice extends Component {
    render(){
        return(
            <div>
                <i className={`dice fas fa-dice-${this.props.face} ${this.props.rolling ? 'shaking':''}`}></i>
            </div>
        )
    }
}
export default Dice;