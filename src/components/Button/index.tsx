import { ButtonProps } from 'antd';
import React from 'react';

import { StyledButton } from './styles';

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export { Button };
