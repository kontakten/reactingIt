import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
    constructor(props){
        super(props);
        this.state = {
             counter: 1
        };
    }
    handleClick(){
        this.setState({
            counter: this.state.counter + 1
        });
        console.log(this.state.counter + ' times clicked');
    }
    render(){
        return(
            <button onClick={() => this.handleClick()}>
                <h1>Counter: {this.state.counter}</h1>
            </button>
        );
    }
}

module.exports = Button;