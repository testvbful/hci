import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = (props) => {
        return(
            <div className="not-found">   
                <div className="not-found__text">
                    <h1 className="not-found__text__heading">Sorry</h1>
                    <h3 className="not-found__text__description">We couldn't find the page you're looking for. But we're working on it. </h3>
                    <div className="not-found__text__buttons">
                        <Link to="/"><button className="not-found__text__buttons__home">Home</button></Link>
                    </div>
                </div>
            </div>
        );
    }

export default NotFound;