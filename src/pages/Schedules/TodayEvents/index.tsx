import React, { useEffect, useState } from 'react';
import { api } from '../../../services/api';

import {
  Container,
  NewEventButton,
  ListEvents,
  Event,
  ListTags,
  Tag,
} from './styles';

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

      <ListEvents>
        {todayEvents.length > 0 &&
          todayEvents.map(({ name, description, tags }) => (
            <Event backgroundColor={tags[0].colorHex}>
              <span className="name">{name}</span>
              <span className="description">{description}</span>
              <ListTags>
                {tags.map(({ name: tagName, colorHex }) => (
                  <Tag backgroundColor={colorHex}>{tagName}</Tag>
                ))}
              </ListTags>
            </Event>
          ))}
      </ListEvents>
    </Container>
  );
};

export { TodayEvents };
