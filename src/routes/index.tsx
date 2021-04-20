import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { SignIn } from '../pages/Auth';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/sign-in" component={SignIn} />
      </Switch>
    </Router>
  );
};

export default Routes;
