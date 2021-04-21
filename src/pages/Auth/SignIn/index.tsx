import React, { useCallback, useRef } from 'react';

import { FiMail, FiKey } from 'react-icons/fi';

import { FormHandles } from '@unform/core';

import * as Yup from 'yup';

import { Input } from '../../../components/Form/Input';
import { Form } from '../../../components/Form';
import { Button } from '../../../components/Button';

import { Wrapper, Title, Container } from './styles';
import { getValidationErrors } from '../../../utils/getValidationErrors';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async data => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('O e-mail é obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('A senha é obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      return '';
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);

        return formRef.current?.setErrors(errors);
      }

      return '';
    }
  }, []);

  return (
    <Wrapper>
      <Container>
        <Title>Schedules</Title>
        <Form ref={formRef} onSubmit={handleSubmit} width="60%">
          <Input label="Email" name="email" icon={FiMail} />

          <Input
            label="Password"
            name="password"
            type="password"
            icon={FiKey}
          />

          <div className="button-group">
            <Button>Entrar</Button>
          </div>
        </Form>
        <Button width="20%" ghost>
          Registrar
        </Button>
      </Container>
    </Wrapper>
  );
};

export { SignIn };
