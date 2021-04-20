import React from 'react';

import { StyledForm } from './styles';

export interface IFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  width?: string;
}

const Form: React.FC<IFormProps> = ({ width = '100%', children, ...rest }) => {
  return (
    <StyledForm width={width} {...rest}>
      {children}
    </StyledForm>
  );
};

export { Form };
