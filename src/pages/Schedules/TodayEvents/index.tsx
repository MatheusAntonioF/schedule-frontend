import React, { useEffect, useState } from 'react';
import { api } from '../../../services/api';

import { Container, NewEventButton } from './styles';

interface Tag {
  name: string;
  colorHex: string;
}

interface Event {
  name: string;
  description: string;
  date: Date;
  tags: Tag[];
}

const TodayEvents: React.FC = () => {
  const [todayEvents, setTodayEvents] = useState<Event[]>([]);

  useEffect(() => {
    async function fetchTodayEvents() {
      const { data } = await api.get<Event[]>('/events', {
        params: {
          start_date: new Date(),
          end_date: new Date(),
        },
      });

      setTodayEvents(data);
    }

    fetchTodayEvents();
  }, []);

  return (
    <Container>
      <NewEventButton>Criar evento</NewEventButton>
    </Container>
  );
};

export { TodayEvents };
