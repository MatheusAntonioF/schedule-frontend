import React, { useCallback, useEffect, useState } from 'react';

import { isSameDay } from 'date-fns';

import FullCalendar, { EventInput } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import { transparentize } from 'polished';
import { Wrapper, Container, Calendar } from './styles';

import { TodayEvents } from './TodayEvents';

import { buttonsHeaderCalendar } from './calendarOptions';
import { api } from '../../services/http/api';
import { CreateEvent } from './Modals/CreateEvent';

interface Tag {
  name: string;
  colorHex: string;
}

export interface IEvent {
  id: string;
  name: string;
  description: string;
  date: Date;
  tags: Tag[];
}

const Schedules: React.FC = () => {
  const [events, setEvents] = useState<IEvent[]>([]);

  const [showModalCreateEvent, setShowModalCreateEvent] = useState(false);

  useEffect(() => {
    async function fetchTodayEvents() {
      const { data } = await api.get<IEvent[]>('/events');

      setEvents(data);
    }

    fetchTodayEvents();
  }, []);

  const todayEvents = useCallback(() => {
    if (events.length === 0) return [] as IEvent[];

    const foundEvents = events.filter(event =>
      isSameDay(new Date(event.date), new Date())
    );

    return foundEvents;
  }, [events]);

  const parseEvents = useCallback(() => {
    const eventsToPutOnCalendar: EventInput[] = events.map(
      ({ id, name, date, tags }) => {
        const input: EventInput = {
          id,
          _id: id,
          title: name,
          editable: true,
          backgroundColor: transparentize(0.5, tags[0].colorHex),
          allDay: true,
          classNames: ['calendar-event'],
          color: '#fafafa',
          date,
          display: 'block',
        };

        return input;
      }
    );

    return eventsToPutOnCalendar;
  }, [events]);

  return (
    <>
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
              events={parseEvents()}
            />
          </Calendar>
          <TodayEvents
            setShowModalCreateEvent={setShowModalCreateEvent}
            events={todayEvents()}
          />
        </Container>
      </Wrapper>
      <CreateEvent
        showModal={showModalCreateEvent}
        setShowModal={setShowModalCreateEvent}
        setEvents={setEvents}
      />
    </>
  );
};

export { Schedules };
