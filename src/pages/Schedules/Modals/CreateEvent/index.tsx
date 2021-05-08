import React, { useCallback, useEffect, useRef, useState } from 'react';

import { FiAward } from 'react-icons/fi';

import { FormHandles } from '@unform/core';

import * as Yup from 'yup';

import { Modal } from '../../../../components/Modal';
import { Form } from '../../../../components/Form';
import { Input } from '../../../../components/Form/Input';
import { Button } from '../../../../components/Button';
import { DatePicker } from '../../../../components/Form/DatePicker';

import { api } from '../../../../services/http/api';
import { getValidationErrors } from '../../../../utils/getValidationErrors';
import { Select } from '../../../../components/Form/Select';

interface ICreateEventProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ITag {
  id: string;
  name: string;
  colorHex: string;
}

const CreateEvent: React.FC<ICreateEventProps> = ({
  showModal,
  setShowModal,
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

  const handleSubmit = useCallback(async data => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        description: Yup.string().required('A descrição é obrigatória'),
        date: Yup.string().required('A data é obrigatória'),
        tags: Yup.string().required('As tags são obrigatórias'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    }
  }, []);

  const onCloseCallback = useCallback(() => setShowModal(false), [
    setShowModal,
  ]);

  const tagsToSelect = useCallback(() => {
    if (tags.length === 0) return [{ value: '', label: '' }];

    const parsedTags = tags.map(({ id, name }) => ({ value: id, label: name }));

    return parsedTags;
  }, [tags]);

  return (
    <>
      {showModal && (
        <Modal
          width="20rem"
          title="Novo evento"
          headIcon={FiAward}
          onClose={onCloseCallback}
        >
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input label="Nome" name="name" />
            <Input label="Descrição" name="description" />
            <DatePicker label="Date" name="date" />

            <Select label="Tags" name="tags" options={tagsToSelect()} />

            <Button>Confirmar</Button>
          </Form>
        </Modal>
      )}
    </>
  );
};

export { CreateEvent };
