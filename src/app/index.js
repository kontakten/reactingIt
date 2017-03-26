import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Components/button.js';
import Header from './Components/header.js';

class Index extends React.Component {

    render(){
        return(
            <div className="header">
                <Header name="Mikkel" />
                <Header name="Kasper" />
                <Header name="Kim" />
                <Button />
            </div>
        );
    }
}

module.exports = Index;