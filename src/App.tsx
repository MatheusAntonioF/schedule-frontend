import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import { RootProviders } from './hooks';
import { DefaultStyles } from './styles';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <DefaultStyles>
        <RootProviders>
          <Routes />
        </RootProviders>
      </DefaultStyles>
    </BrowserRouter>
  );
};

export default App;
