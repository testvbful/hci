import React from 'react';
import { Link } from 'react-router-dom';

const Error = (props) => {

    return (
        <div className="error">
            <div className="error__image">
                <img src={require("../images/white-dog.jpg")} alt="error"/>
            </div>
            <div className="error__text">
                <h1 className="error__text__heading">Something's missing here...</h1>
                <h3 className="error__text__description">Sorry, we can't find animals you're looking for. Head back to home to find new ones, or contact us.</h3>
                <div className="error__text__buttons">
                    <Link to="/"><button className="error__text__buttons__home">Home</button></Link>
                    <button className="error__text__buttons__contact">Contact</button>
                </div>
            </div>
        </div>
    );
}


export default Error;