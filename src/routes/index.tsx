import React from 'react';

import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { Route } from './Route';

import { SignIn } from '../pages/Auth';
import { Schedules } from '../pages/Schedules';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/schedules" component={Schedules} isPrivate />
      </Switch>
    </Router>
  );
};

export default Routes;
