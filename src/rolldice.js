import React, { Component } from 'react';
import Dice from './dice';
import './rolldice.css';

class Rolldice extends Component{

    static defaultProps = {
        sides:['one', 'two','three','four','five','six']
    };
    constructor(props){
        super(props);
        this.state = {die1 : 'one', die2: 'one', rolling:false };
        this.roll = this.roll.bind(this); 
    }
    roll(){
        // pick 2 new rolls
     const newdice1=this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
     const newdice2=this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
    //  set state with new rolls
    this.setState({die1: newdice1, die2: newdice2,rolling:true});

    // wait one second then set rolling to false
    setTimeout( () => {
            this.setState({rolling:false})
    },1000);
    }
    render(){
        return(
            <div className='rolldice'>
            <div className='rolldice-container'>
            <Dice face = {this.state.die1} rolling = {this.state.rolling}/>
            <Dice face = {this.state.die2} rolling = {this.state.rolling}/>
            </div>    
            <button onClick={this.roll} disabled={this.state.rolling}>
                {this.state.rolling ? 'Rolling...':'Roll Dice!'}
            </button>
            </div>
        )
    }
}

export default Rolldice;