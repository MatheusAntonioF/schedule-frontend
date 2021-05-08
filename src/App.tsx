import React from 'react';

import Routes from './routes';

import { RootProviders } from './hooks';
import { DefaultStyles } from './styles';

const App = (): JSX.Element => {
  return (
    <DefaultStyles>
      <RootProviders>
        <Routes />
      </RootProviders>
    </DefaultStyles>
  );
};

export default App;
