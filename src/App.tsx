import React from 'react';
import { RootProviders } from './hooks';

import Routes from './routes';
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
