import React, { useCallback, useEffect, useRef, useState } from 'react';

import { FiEdit2 } from 'react-icons/fi';

import { FormHandles } from '@unform/core';

import * as Yup from 'yup';

import { Modal } from '../../../../components/Modal';
import { Form } from '../../../../components/Form';
import { Input } from '../../../../components/Form/Input';
import { Button } from '../../../../components/Button';

import { api } from '../../../../services/http/api';
import { getValidationErrors } from '../../../../utils/getValidationErrors';
import { Select } from '../../../../components/Form/Select';
import { IEvent } from '../..';

interface IUpdateEventProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setEvents: React.Dispatch<React.SetStateAction<IEvent[]>>;
  selectedEvent: IEvent;
  setSelectedEvent: React.Dispatch<React.SetStateAction<IEvent>>;
}

interface ITag {
  id: string;
  name: string;
  colorHex: string;
}

const UpdateEvent: React.FC<IUpdateEventProps> = ({
  showModal,
  setShowModal,
  setEvents,
  selectedEvent: {
    id: event_id,
    name: selectedEventName,
    description: selectedEventDescription,
    tags: selectedEventTagId,
  },
  setSelectedEvent,
}) => {
  const [tags, setTags] = useState<ITag[]>([]);

  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    async function fetchTags() {
      const { data } = await api.get<ITag[]>('/tags');

      setTags(data);
    }

    if (showModal) fetchTags();
  }, [showModal]);

  const onCloseCallback = useCallback(() => setShowModal(false), [
    setShowModal,
  ]);

  const tagsToSelect = useCallback(() => {
    if (tags.length === 0) return [{ value: '', label: '' }];

    const parsedTags = tags.map(({ name }) => ({ value: name, label: name }));

    return parsedTags;
  }, [tags]);

  const selectedTags = useCallback(() => {
    if (tags.length === 0 || !selectedEventTagId)
      return [{ value: '', label: '' }];

    const { id } = selectedEventTagId[0];

    const foundTag = tags.find(({ id: tag_id }) => tag_id === id);

    if (!foundTag) return [{ value: '', label: '' }];

    const { name } = foundTag;

    return [
      {
        label: name,
        value: name,
      },
    ];
  }, [tags, selectedEventTagId]);

  const handleSubmit = useCallback(
    async (data: Omit<IEvent, 'date'>) => {
      try {
        const eventToBeUpdate = data;

        if (!data.tags) {
          const { label } = selectedTags()[0];

          Object.assign(eventToBeUpdate, { tags: label });
        }

        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          tags: Yup.string().required('As tags são obrigatórias'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { name, description, tags: tags_name } = eventToBeUpdate;

        const { data: updatedEvent } = await api.put<IEvent>(
          `/events/${event_id}`,
          {
            name,
            description,
            tags_name: [tags_name],
          }
        );

        setEvents(oldEvents =>
          oldEvents.map(event => {
            if (event.id === event_id) return updatedEvent;

            return event;
          })
        );

        setSelectedEvent({} as IEvent);
        setShowModal(false);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [setEvents, setSelectedEvent, setShowModal, selectedTags, event_id]
  );

  return (
    <>
      {showModal && (
        <Modal
          width="20rem"
          title="Editar evento"
          headIcon={FiEdit2}
          onClose={onCloseCallback}
        >
          <Form
            ref={formRef}
            initialData={{ tags: selectedTags()[0].value }}
            onSubmit={handleSubmit}
          >
            <Input label="Nome" name="name" defaultValue={selectedEventName} />
            <Input
              label="Descrição"
              name="description"
              defaultValue={selectedEventDescription}
            />

            <Select
              label="Tags"
              name="tags"
              value={selectedTags()}
              options={tagsToSelect()}
            />

            <Button type="submit">Confirmar</Button>
          </Form>
        </Modal>
      )}
    </>
  );
};

export { UpdateEvent };
