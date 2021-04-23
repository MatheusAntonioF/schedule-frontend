import React from 'react';

import { AuthProvider } from './auth';

const RootProviders: React.FC = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export { RootProviders };
