import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Sections/header.jsx';
import Button from './Components/button.jsx';
import Footer from './Components/Sections/footer.jsx';

export default class Index extends React.Component {

    render(){
        return(
            <div className="header">
                <Header name="Mikkel" />
                <Button />
                <Button />
                <Button />
                <Footer />
            </div>
        );
    }
}
