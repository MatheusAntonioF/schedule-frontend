import React, { useEffect, useRef } from 'react';

import ReactSelect, {
  GroupTypeBase,
  OptionTypeBase,
  Props as CreatableProps,
} from 'react-select';

import { useField } from '@unform/core';

import { Container, ContainerError, MessageError } from './styles';

interface ISelectProps extends CreatableProps<OptionTypeBase, false> {
  label: string;
  name: string;
  options: readonly (OptionTypeBase | GroupTypeBase<OptionTypeBase>)[];
}

const Select: React.FC<ISelectProps> = ({ label, options, name, ...rest }) => {
  const selectRef = useRef(null);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: ref => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option: OptionTypeBase) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <Container inputWithError={!!error}>
      <label htmlFor={name}>{label}</label>

      <ReactSelect
        defaultValue={
          defaultValue && options.find(option => option.value === defaultValue)
        }
        value={defaultValue}
        ref={selectRef}
        options={options}
        placeholder={label}
        classNamePrefix="react-select"
        {...rest}
      />

      {!!error && (
        <ContainerError>
          <MessageError>{error}</MessageError>
        </ContainerError>
      )}
    </Container>
  );
};

export { Select };
