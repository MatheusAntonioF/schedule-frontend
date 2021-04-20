import React from 'react';

import { StyledForm } from './styles';

const Form: React.FC = ({ children }) => {
  return <StyledForm>{children}</StyledForm>;
};

export { Form };
