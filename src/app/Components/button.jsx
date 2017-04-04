import React from 'react';
import ReactDOM from 'react-dom';

export default class Button extends React.Component {
    constructor(){
        super();
        this.state = {
             counter: 1,
             toggleCounter: false
        };
        
    }
    handleClick(){     

        setInterval(() =>{
            this.setState({
                counter: this.state.counter + 1
            });
        },  1000);       
        
    }

    render(){    

        return(
            <button onClick={() => this.handleClick()}>
                <h1>Counter: {this.state.counter}</h1>
            </button>
        );
    }
}
