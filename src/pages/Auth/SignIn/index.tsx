import React from 'react';

import { Typography } from 'antd';

import { FiMail, FiKey } from 'react-icons/fi';

import { Input } from '../../../components/Form/Input';
import { Form } from '../../../components/Form';
import { Button } from '../../../components/Button';

import { Wrapper, Container } from './styles';

const { Title } = Typography;

const SignIn: React.FC = () => {
  return (
    <Wrapper>
      <Title>Schedules</Title>
      <Container>
        <Form>
          <Input label="Email" name="mail" prefix={<FiMail />} />

          <Input label="Password" name="mail" prefix={<FiKey />} />

          <div className="button-group">
            <Button block>Entrar</Button>
          </div>
        </Form>
        <Button block ghost>
          Registrar
        </Button>
      </Container>
    </Wrapper>
  );
};

export { SignIn };
