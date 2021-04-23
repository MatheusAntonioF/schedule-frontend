import React, { useEffect, useRef } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { IconBaseProps } from 'react-icons/lib';

import { useField } from '@unform/core';

import {
  Wrapper,
  ContainerInput,
  StyledInput,
  ContainerError,
  ErrorMessage,
} from './styles';

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
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Wrapper inputWithError={!!error}>
      <label htmlFor={name}>{label}</label>
      <ContainerInput>
        {Icon && <Icon className="icon-input" size={20} />}
        <StyledInput
          ref={inputRef}
          defaultValue={defaultValue}
          name={name}
          {...rest}
        />
      </ContainerInput>
      {!!error && (
        <ContainerError>
          <FiAlertCircle size={20} />
          <ErrorMessage>{error}</ErrorMessage>
        </ContainerError>
      )}
    </Wrapper>
  );
};

export { Input };
