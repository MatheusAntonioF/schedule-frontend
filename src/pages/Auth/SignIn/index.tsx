import React from 'react';

import { FiMail, FiKey } from 'react-icons/fi';

import { Input } from '../../../components/Form/Input';
import { Form } from '../../../components/Form';
import { Button } from '../../../components/Button';

import { Wrapper, Title, Container } from './styles';

const SignIn: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Schedules</Title>
        <Form width="60%">
          <Input label="Email" name="mail" type="email" icon={FiMail} />

          <Input label="Password" name="mail" type="password" icon={FiKey} />

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
