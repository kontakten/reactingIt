import React from 'react';
import ReactDOM from 'react-dom';

export default class Header extends React.Component {
    render(){
        const name = this.props.name;
        return(
            <h1>Welcome, {name}</h1>
        );
    }
}
