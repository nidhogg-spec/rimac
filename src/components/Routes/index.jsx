// Dependencies
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Resources
import ArmaPlan from '../ArmaPlan/ArmaPlan';
import Home from '../Home/Home';

const Routes = () => (
  <>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/ArmaPlan/:plate">
        <ArmaPlan />
      </Route>
    </Switch>
  </>
);

export default Routes;
