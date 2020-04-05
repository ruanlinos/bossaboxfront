import styled from 'styled-components';
import media from 'styled-media-query';
import { Select } from 'antd';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;
`;

export const AddButton = styled.button`
  display: flex;
  justify-content: center;
  width: 190px;
  padding: 10px;
  height: 50px;
  background: #365df0;
  border-radius: 5px;
  font-size: 18px;
  color: #ffff;
  word-wrap: none;
  transition: opacity 0.2s;
  svg {
    margin-right: 10px;
  }
  ${media.lessThan('medium')`
    width: 100%;
    margin-top: 15px;
  `}
  &:hover {
    opacity: 0.8;
  }
`;
export const TagsInput = styled(Select)`
  .ant-select-multiple,
  .ant-select-selector {
    background-color: #f5f4f6;
    border: 1px solid #ebeaed;
    box-sizing: border-box;
    border-radius: 5px;
    width: 100%;
  }
  .ant-select-selection-item {
    background-color: #365df0;
    color: #ffff;
    border-radius: 5px;
  }
  margin-bottom: 15px;
`;
export const Title = styled.strong`
  margin-bottom: 32px;
  font-size: 18px;
  line-height: 23px;
  color: #170c3a;
`;

export const Label = styled.label``;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
