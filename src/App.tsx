import React from 'react';

import Routes from './routes';
import { DefaultStyles } from './styles';

const App = (): JSX.Element => {
  return (
    <DefaultStyles>
      <Routes />
    </DefaultStyles>
  );
};

export default App;
