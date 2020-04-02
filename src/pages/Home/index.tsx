import React, { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import { Modal as AntdModal  } from 'antd';
import Modal from '../../components/Modal';
import {
  Container,
  Wrapper,
  Input,
  AddButton,
  AddContainer,
  ModalHeader,
  SearchBar,
  Content,
  Card,
  CardHeader,
  Title,
  RemoveButton,
  Description,
  Tags,
  CancelButton,
  Checkbox
} from './styles';

export default function Home() {
  const [modalState, setModalState] = useState(false);
  const [checkboxState, setcheckboxState] = useState(false);

  return (
    <Container>
      <h1>VUTTR</h1>
      <h3>Very Useful Tools to Remember</h3>
      <Wrapper>
        <SearchBar>
          <Input />
          
          <Checkbox checked={checkboxState} onChange={() => setcheckboxState(!checkboxState)}> search only in tags </Checkbox>
        </SearchBar>
        <AddContainer>
          <Modal />
        </AddContainer>
      </Wrapper>
      <Content>
        <Card>
          <CardHeader>
            <Title>Notion</Title>
            <RemoveButton onClick={() => setModalState(true)}>
              <IoIosClose size={20} />
              remove
            </RemoveButton>
          </CardHeader>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            eget augue enim. In hac habitasse platea dictumst.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Integer eget augue enim. In
            hac habitasse platea dictumst.
          </Description>
          <Tags>#organization #planning #collaboration #writing #calendar</Tags>
        </Card>
        <Card>
          <CardHeader>
            <Title>Notion</Title>
            <RemoveButton onClick={() => setModalState(true)}>
              <IoIosClose size={20} />
              remove
            </RemoveButton>
          </CardHeader>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            eget augue enim. In hac habitasse platea dictumst.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Integer eget augue enim. In
            hac habitasse platea dictumst.
          </Description>
          <Tags>#organization #planning #collaboration #writing #calendar</Tags>
        </Card>
      </Content>
      <AntdModal
        visible={modalState}
        onCancel={() => setModalState(false)}
        footer=""
      >
        <ModalHeader><IoIosClose size={20} /> Remove tool</ModalHeader> 
        Are you sure you want to remove Notion?
        <AddButton>
          Yes, remove
        </AddButton>
        <CancelButton>
          Cancel
        </CancelButton>
      </AntdModal>
    </Container>
  );
}
