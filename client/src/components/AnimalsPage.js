import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const HomePage = (props) => {

    const links = {
        color: '#484848'
    }

    return(
        <div className="animals-page">
            <Header links={links}/>
            <Main />
            <Footer />
        </div>
    );
}


export default HomePage;