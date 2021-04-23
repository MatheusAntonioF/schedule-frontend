import React from 'react';

import { Wrapper, Container, Calendar } from './styles';
import { TodayEvents } from './TodayEvents';

const Schedules: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Calendar>Calendar</Calendar>
        <TodayEvents>Eventos de hoje</TodayEvents>
      </Container>
    </Wrapper>
  );
};

export { Schedules };
