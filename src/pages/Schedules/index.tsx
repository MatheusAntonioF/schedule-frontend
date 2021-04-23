import React from 'react';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import { Wrapper, Container, Calendar } from './styles';
import { TodayEvents } from './TodayEvents';

const Schedules: React.FC = () => {
  const buttonsHeaderCalendar = {
    today: 'Hoje',
    dayGridMonth: 'Mês',
    week: 'week',
    dayGridWeek: 'Semana',
    list: 'list',
  };

  return (
    <Wrapper>
      <Container>
        <Calendar>
          <FullCalendar
            weekends
            height="100%"
            contentHeight="100%"
            initialView="dayGridMonth"
            locale="pt-br"
            plugins={[dayGridPlugin]}
            buttonText={buttonsHeaderCalendar}
          />
        </Calendar>
        <TodayEvents />
      </Container>
    </Wrapper>
  );
};

export { Schedules };
