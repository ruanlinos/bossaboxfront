import React, { useState } from 'react';
import { notification } from 'antd';
import { IoIosClose } from 'react-icons/io';
import { removeTool } from '../../api/tools';

import {
  ModalHeader,
  Card,
  CancelButton,
  CardHeader,
  Title,
  RemoveButton,
  Description,
  AddButton,
  Actions,
  ModalDescription,
  RemoveModal,
  TagsContent,
  Tag,
} from './styles';

interface Props {
  tool: Global.ITool;
  refetch: VoidFunction;
}

export default function Tool({ tool, refetch }: Props) {
  const { id, title, link, description, tags } = tool;
  const [modalState, setModalState] = useState(false);

  const handleRemove = async () => {
    try {
      await removeTool(id);
      refetch();
      setModalState(false);
      notification.success({
        message: 'Success!',
        description: 'The selected tool has been successfully deleted',
        style: {
          backgroundColor: '#10B26C',
          borderRadius: 5,
          color: '#ffffff',
        },
      });
    } catch (error) {
      notification.error({
        message: 'An error has occurred!!',
        description: error.message,
        style: {
          backgroundColor: '#F95E5A',
          borderRadius: 5,
          color: '#FFFFFF',
        },
      });
    }
  };

  return (
    <>
      <Card key={id}>
        <CardHeader>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Title>{title}</Title>
          </a>
          <RemoveButton onClick={() => setModalState(true)}>
            <IoIosClose size={20} />
            <p>remove</p>
          </RemoveButton>
        </CardHeader>
        <Description>{description}</Description>
        <TagsContent>
          {tags.map((tag) => (
            <Tag key={tag}>#{tag}</Tag>
          ))}
        </TagsContent>
      </Card>
      <RemoveModal
        visible={modalState}
        onCancel={() => setModalState(false)}
        footer=""
      >
        <ModalHeader>
          <IoIosClose size={20} /> Remove tool
        </ModalHeader>
        <ModalDescription>
          Are you sure you want to remove {title}?
        </ModalDescription>
        <Actions>
          <CancelButton onClick={() => setModalState(false)}>
            Cancel
          </CancelButton>
          <AddButton onClick={() => handleRemove()}>Yes, remove</AddButton>
        </Actions>
      </RemoveModal>
    </>
  );
}
