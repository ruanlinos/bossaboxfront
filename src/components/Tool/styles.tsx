import styled from 'styled-components';
import media from 'styled-media-query';
import { Modal } from 'antd';

export const RemoveModal = styled(Modal)`
  .ant-modal-close-x {
    display: none;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 26px;
  margin-bottom: 70px;
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
  transition: filter 0.2s;
  &:hover {
    filter: brightness(90%);
  }
`;
export const AddButton = styled.button`
  display: flex;
  justify-content: center;
  width: 122px;
  height: 42.37px;
  background: #365df0;
  border-radius: 5px;
  font-size: 18px;
  color: #ffff;
  transition: opacity 0.2s;
  svg {
    margin-right: 10px;
  }
  &:hover {
    opacity: 0.8;
  }
`;
export const Actions = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background-color: #fdfdfd;
  min-height: 160px;
  padding: 15px 30px;
  border-radius: 5px;
  margin-bottom: 30px;
  box-shadow: 0 1.1px 2.2px rgba(0, 0, 0, 0.02),
    0 3.8px 7.4px rgba(0, 0, 0, 0.03), 0 17px 33px rgba(0, 0, 0, 0.05);

  ${media.lessThan('medium')`
    padding: 15px;
  `}
`;
export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Title = styled.p`
  width: 100%;
  font-weight: bold;
  cursor: pointer;
  color: #365df0;
`;
export const RemoveButton = styled.div`
  display: flex;
  cursor: pointer;
  color: #f95e5a;
  align-items: center;
  max-height: 20px;
  border-radius: 5px;
  padding: 5px;
  transition: opacity 0.2s;
  p {
    color: #f95e5a;
    font-size: 15px;
    margin-bottom: 0;
  }
  transition: background-color 0.2s;

  &:hover {
    opacity: 0.8;
    background-color: #f95e5a;
    p,
    svg {
      color: #fff;
    }
  }
`;
export const Description = styled.small`
  width: 100%;
  margin-bottom: 26px;
`;
export const ModalDescription = styled.p`
  padding: 50px 0 50px 0;
`;

export const TagsContent = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  strong {
    margin-right: 5px;
  }
`;
export const Tag = styled.strong``;
