import React from 'react';

import { IconBaseProps } from 'react-icons/lib';

import { Wrapper, ContainerInput, StyledInput } from './styles';

interface ICustomProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<ICustomProps> = ({
  label,
  name,
  icon: Icon,
  ...rest
}) => {
  return (
    <Wrapper>
      <label htmlFor={name}>{label}</label>
      <ContainerInput>
        {Icon && <Icon size={20} />}
        <StyledInput {...rest} name={name} />
      </ContainerInput>
    </Wrapper>
  );
};

export { Input };
