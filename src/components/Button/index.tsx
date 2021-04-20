import React from 'react';

import { StyledButton } from './styles';

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  ghost?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  width = '100%',
  children,
  ghost,
  ...rest
}) => {
  return (
    <StyledButton ghost={ghost} width={width} {...rest}>
      {children}
    </StyledButton>
  );
};

export { Button };
