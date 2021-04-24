import React from 'react';

import {
  Container,
  NewEventButton,
  ListEvents,
  Event,
  ListTags,
  Tag,
} from './styles';

import { IEvent } from '..';

interface ITodayEventsProps {
  events: IEvent[];
}

const TodayEvents: React.FC<ITodayEventsProps> = ({ events }) => {
  return (
    <Container>
      <NewEventButton>Criar evento</NewEventButton>

      <ListEvents>
        {events.length > 0 &&
          events.map(({ name, description, tags }) => (
            <Event key={name} backgroundColor={tags[0].colorHex}>
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
