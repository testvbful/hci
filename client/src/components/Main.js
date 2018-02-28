import React from 'react';
import { Switch, Route } from 'react-router';
import Animals from '../containers/Animals';
import MoreAboutAnimal from '../containers/MoreAboutAnimal';
import MoreAboutAzil from '../containers/MoreAboutAzil';

const Main = (props) => {

    return(
        <main>
            <Switch>
                <Route exact path='/animals' component={Animals} />
                <Route exact path='/animals/:animalName' component={MoreAboutAnimal} />
                <Route exact path='/animals/:animalName/:azil' component={MoreAboutAzil} />
            </Switch>
        </main>
    );
}

export default Main;