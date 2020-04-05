import styled from 'styled-components';
import media from 'styled-media-query';
import { Checkbox as AntdCheck, Modal } from 'antd';

export const Container = styled.div`
  max-height: 100vh;
  height: 100%;
  padding: 50px;
  ${media.lessThan('medium')`
    padding: 10px;
  `}
`;
export const RemoveModal = styled(Modal)`
  .ant-modal-close-x {
    display: none;
  }
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
  ${media.lessThan('medium')`
    flex-direction: column;
    margin-bottom: 30px;
  `}
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
  ${media.lessThan('medium')`
    width: 100%;
    margin-top: 5px;
    max-width: none;
  `}
`;
export const SearchBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  ${media.lessThan('medium')`
    flex-direction: column-reverse;
    align-items: flex-end;
  `}
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
  color: #170c3a;
  font-weight: bold;
`;
export const CancelButton = styled.button`
  background: #e1e7fd;
  border-radius: 5px;
  width: 122px;
  height: 42.37px;
  color: #365df0;
  margin-right: 25px;
  font-size: 18px;
`;
export const Actions = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardHeader = styled.div`
  display: flex;
`;
export const Title = styled.p`
  width: 100%;
  font-weight: bold;
`;
export const RemoveButton = styled.div`
  display: flex;
  cursor: pointer;
`;
export const Description = styled.small`
  width: 100%;
  margin-bottom: 26px;
`;
export const ModalDescription = styled.p`
  padding: 50px 0 50px 0;
`;
export const Tags = styled.strong`
  margin-right: 10px;
  display: flex;
`;
export const TagsContent = styled.div`
  display: flex;
  width: 100%;
`;
