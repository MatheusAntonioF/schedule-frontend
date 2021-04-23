import React from 'react';

import { FormHandles, FormProps } from '@unform/core';

import { StyledForm } from './styles';

export interface IFormProps extends FormProps {
  width?: string;
}

const FormWithRef: React.ForwardRefRenderFunction<FormHandles, IFormProps> = (
  { width = '100%', children, onSubmit },
  ref
) => {
  return (
    <StyledForm width={width} ref={ref} onSubmit={onSubmit}>
      {children}
    </StyledForm>
  );
};

const Form = React.forwardRef(FormWithRef);

export { Form };
