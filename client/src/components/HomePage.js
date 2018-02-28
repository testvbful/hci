import React from 'react';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';

const HomePage = (props) => {

    return(
        <div className="page">
            <Header />
            <Home />
            <Footer />
        </div>
    );
}


export default HomePage;