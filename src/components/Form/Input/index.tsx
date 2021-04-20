import React from 'react';

import { InputProps } from 'antd';

import { StyledInput, Container } from './styles';

interface ICustomProps extends InputProps {
  label: string;
  name: string;
}

const Input: React.FC<ICustomProps> = ({ label, name, ...rest }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <StyledInput name={name} {...rest} />
    </Container>
  );
};

export { Input };
