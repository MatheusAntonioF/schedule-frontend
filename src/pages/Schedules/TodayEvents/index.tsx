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
  setShowModalCreateEvent: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
}

const TodayEvents: React.FC<ITodayEventsProps> = ({
  events,
  setShowModalCreateEvent,
  setSelectedDate,
}) => {
  return (
    <Container>
      <NewEventButton
        onClick={() => {
          setShowModalCreateEvent(true);
          setSelectedDate(new Date());
        }}
      >
        Criar evento
      </NewEventButton>

      <ListEvents>
        {events.length > 0 &&
          events.map(({ name, description, tags }) => (
            <Event key={name} backgroundColor={tags[0].colorHex}>
              <span className="name">{name}</span>
              <span className="description">{description}</span>
              <ListTags>
                {tags.map(({ name: tagName, colorHex }) => (
                  <Tag key={tagName} backgroundColor={colorHex}>
                    {tagName}
                  </Tag>
                ))}
              </ListTags>
            </Event>
          ))}
      </ListEvents>
    </Container>
  );
};

export { TodayEvents };
