import React from 'react';

import { Router, Switch } from 'react-router-dom';

import { Route } from './Route';

import { SignIn } from '../pages/Auth';
import { Schedules } from '../pages/Schedules';
import { browserHistory } from '../services/http/history/browserHistory';

const Routes: React.FC = () => {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/schedules" component={Schedules} isPrivate />
      </Switch>
    </Router>
  );
};

export default Routes;
