const css = require('./app.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import Index from './app/index.js';


class App extends React.Component {
    
    render(){
        return(
           <Index />
        );
    }
}

const root = document.getElementById('root');

ReactDOM.render(<App />, root);