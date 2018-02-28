import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import HomePage from './HomePage';
import NotFound from './NotFound';
import AnimalsPage from './AnimalsPage';

const App = (props) => {

  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/animals" component={AnimalsPage} />
      <Route exact path="/404" component={NotFound} />
      <Redirect from="*" to="/404" />
    </Switch>
  );
}

export default App;
