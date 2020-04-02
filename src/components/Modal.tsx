import React, { useState, useEffect } from 'react';
import { IoIosAdd } from 'react-icons/io';
import { Modal as AntdModal } from 'antd';
import styled from 'styled-components';

const Form = styled.div`
  display:flex;
  flex-direction: column;
`;
const Input = styled.input`
  background-color: #f5f4f6;
  border: 1px solid #ebeaed;
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;
  height: 40px;
  padding-left: 15px;
  margin-bottom: 15px;
`;
const Textarea = styled.textarea`
  background-color: #f5f4f6;
  border: 1px solid #ebeaed;
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;
  height: 115px;
  padding-left: 15px;
  margin-bottom: 15px;
`;
export const AddButton = styled.button`
  display: flex;
  justify-content: center;
  min-width: 190px;
  padding: 10px;
  height: 50px;
  background: #365df0;
  border-radius: 5px;
  font-size: 18px;
  color: #ffff;
  word-wrap: none;
  svg {
    margin-right: 10px;
  }
`;
const Label = styled.label``;
export default function Modal() {
  const [modalState, setModalState] = useState(false);

 
  return (
    <>
      <AddButton onClick={() => setModalState(true)}>
        <IoIosAdd size={25} />
        Add new Tool
      </AddButton>
      <AntdModal
        visible={modalState}
        onCancel={() => setModalState(false)}
        footer=""
      >
        <Form>
          <Label>Tool Name</Label>
          <Input />
          <Label>Tool Link</Label>
          <Input type="url" />
          <Label>Tool Description</Label>
          <Textarea />
          <Label>Tool Tags</Label>
          <Input />
          <AddButton>Add Tool</AddButton>
        </Form>
      </AntdModal>
    </>
  );
}
