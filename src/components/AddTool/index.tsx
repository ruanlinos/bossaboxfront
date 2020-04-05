/* eslint-disable import/no-cycle */
import React, { useState, useRef } from 'react';
import { IoIosAdd } from 'react-icons/io';
import { Modal as AntdModal, notification } from 'antd';
import { SubmitHandler, FormHandles } from '@unform/core';
import { ValidationError } from 'yup';
import { createTool } from '../../api/tools';
import {
  AddButton,
  TagsInput,
  Title,
  Form,
  Label,
  Container,
  ButtonContainer,
} from './styles';
import { Input, TextArea } from '..';
import { schema } from '../../validators/createTool';

interface IAddToolProps {
  refetch: VoidFunction;
}

export default function AddTool({ refetch }: IAddToolProps) {
  const formRef = useRef<FormHandles>(null);
  const [modalState, setModalState] = useState(false);
  const [tags, setTags] = useState([]);

  const handleSubmit: SubmitHandler<Global.FormData> = async (
    data,
    { reset }
  ) => {
    try {
      const payload = {
        title: data.title,
        link: data.link,
        description: data.description,
        tags,
      };

      await schema.validate(payload, { abortEarly: false });

      const response = await createTool(payload);

      if (response.status === 201) {
        notification.success({
          message: 'All right!',
          description: 'The tool has been successfully registered.',
          style: {
            backgroundColor: '#10B26C',
            borderRadius: 5,
            color: '#ffffff',
          },
        });
        reset();
        setModalState(false);
        refetch();
      }
    } catch (err) {
      if (err instanceof ValidationError) {
        notification.error({
          message: 'All field are Required',
          description: 'All fields must be filled.',
          style: {
            backgroundColor: '#F95E5A',
            borderRadius: 5,
            color: '#FFFFFF',
          },
        });
      }
    }
  };

  return (
    <Container>
      <AddButton onClick={() => setModalState(true)}>
        <IoIosAdd size={25} />
        Add new Tool
      </AddButton>
      <AntdModal
        visible={modalState}
        onCancel={() => setModalState(false)}
        footer=""
      >
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Title>
            <IoIosAdd size={20} color="#170C3A" /> Add new Tool
          </Title>

          <Input name="title" label="Tool Name" />
          <Input type="url" name="link" label="Tool Link" />
          <TextArea name="description" label="Tool Description" />

          <Label>Tool Tags</Label>
          <TagsInput
            mode="tags"
            style={{ width: '100%' }}
            placeholder="Insert tag here"
            // @ts-ignore
            onChange={(value) => setTags(value)}
          />
          <ButtonContainer>
            <AddButton type="submit">Add Tool</AddButton>
          </ButtonContainer>
        </Form>
      </AntdModal>
    </Container>
  );
}
