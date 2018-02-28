import React from 'react';
import HomeInfo from './HomeInfo';
import HomeForm from '../containers/HomeForm';

const Home = (props) => {

    return(
        <div className="background">
            <HomeForm />
            <HomeInfo />
        </div>
    );
}

export default Home;