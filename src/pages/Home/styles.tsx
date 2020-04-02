import styled from 'styled-components';
import { Checkbox as AntdCheck } from 'antd';

export const Container = styled.div`
  max-height: 100vh;
  height: 100%;
  padding: 50px;
`;

export const Checkbox = styled(AntdCheck)`
  margin-left: 5px;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 26px;
  margin-bottom: 70px;
`;
export const Input = styled.input`
  background-color: #f5f4f6;
  border: 1px solid #ebeaed;
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;
  max-width: 363.41px;
  height: 40px;
  padding-left: 15px;
`;
export const SearchBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
export const AddContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  /* width: 100%; */
`;
export const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  font-size: 18px;
  line-height: 23px;
  color: #170C3A;
  font-weight: bold;
`;
export const CancelButton = styled.button``;
export const AddButton = styled.button`
  display: flex;
  justify-content: center;
  width: 195.75px;
  height: 50px;
  background: #365df0;
  border-radius: 5px;
  font-size: 18px;
  color: #ffff;
  svg {
    margin-right: 10px;
  }
`;
export const Content = styled.div``;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background-color: #ebeaed;
  min-height: 160px;
  padding: 15px 30px;
  border-radius: 5px;
  margin-bottom: 30px;
`;
export const CardHeader = styled.div`
  display: flex;
`;
export const Title = styled.p`
  width: 100%;
`;
export const RemoveButton = styled.div`
  display: flex;
  cursor: pointer;
`;
export const Description = styled.small`
  width: 100%;
`;
export const Tags = styled.strong``;
