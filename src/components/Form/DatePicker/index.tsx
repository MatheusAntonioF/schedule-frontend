import React, { useState, useRef, useEffect } from 'react';

import { ReactDatePickerProps } from 'react-datepicker';
import { useField } from '@unform/core';

import {
  Container,
  StyledDatePicker,
  ContainerInput,
  ContainerError,
  MessageError,
} from './styles';

import 'react-datepicker/dist/react-datepicker.css';

interface IDatePickerProps extends Omit<ReactDatePickerProps, 'onChange'> {
  name: string;
  label: string;
}

const DatePicker: React.FC<IDatePickerProps> = ({ label, name, ...rest }) => {
  const datePickerRef = useRef(null);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  const [date, setDate] = useState(defaultValue || null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datePickerRef.current,
      path: 'props.selected',
      clearValue: ref => {
        ref.clear();
      },
    });
  }, [registerField, fieldName]);

  return (
    <Container inputWithError={!!error}>
      <label htmlFor={name}>{label}</label>
      <ContainerInput>
        <StyledDatePicker
          ref={datePickerRef}
          selected={date}
          onChange={setDate}
          showPopperArrow={false}
          {...rest}
        />
      </ContainerInput>
      {!!error && (
        <ContainerError>
          <MessageError>{error}</MessageError>
        </ContainerError>
      )}
    </Container>
  );
};

export { DatePicker };
