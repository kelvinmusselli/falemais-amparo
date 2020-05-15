import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Prices from './pages/Prices';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/prices" component={Prices}></Route>
    </Switch>
  );
};

export default Routes;
