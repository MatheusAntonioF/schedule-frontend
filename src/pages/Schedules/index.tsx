import React, { useCallback, useEffect, useState } from 'react';

import { isSameDay } from 'date-fns';

import FullCalendar, { EventClickArg, EventInput } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import { transparentize } from 'polished';
import { Wrapper, Container, Calendar } from './styles';

import { TodayEvents } from './TodayEvents';

import { buttonsHeaderCalendar } from './calendarOptions';
import { api } from '../../services/http/api';
import { CreateEvent } from './Modals/CreateEvent';
import { UpdateEvent } from './Modals/UpdateEvent';

interface Tag {
  id?: string;
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
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<IEvent>({} as IEvent);
  const [showModalUpdateEvent, setShowModalUpdateEvent] = useState(false);

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
      ({ id, name, date, tags, ...rest }) => {
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
          tags,
          ...rest,
        };

        return input;
      }
    );

    return eventsToPutOnCalendar;
  }, [events]);

  const handleEventClick = useCallback((event: EventClickArg) => {
    const { title: name } = event.event._def;

    const { _id: id, description, tags } = event.event._def.extendedProps;

    setSelectedEvent({
      id,
      name,
      description,
      tags,
      date: new Date(),
    });

    setShowModalUpdateEvent(true);
  }, []);

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
              plugins={[dayGridPlugin, interactionPlugin]}
              buttonText={buttonsHeaderCalendar}
              events={parseEvents()}
              dateClick={useCallback(({ date }) => {
                setSelectedDate(new Date(date));
                setShowModalCreateEvent(true);
              }, [])}
              eventClick={handleEventClick}
            />
          </Calendar>
          <TodayEvents
            setShowModalCreateEvent={setShowModalCreateEvent}
            setSelectedDate={setSelectedDate}
            events={todayEvents()}
          />
        </Container>
      </Wrapper>
      <CreateEvent
        showModal={showModalCreateEvent}
        setShowModal={setShowModalCreateEvent}
        setEvents={setEvents}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <UpdateEvent
        showModal={showModalUpdateEvent}
        setShowModal={setShowModalUpdateEvent}
        setEvents={setEvents}
        selectedEvent={selectedEvent}
        setSelectedEvent={setSelectedEvent}
      />
    </>
  );
};

export { Schedules };
