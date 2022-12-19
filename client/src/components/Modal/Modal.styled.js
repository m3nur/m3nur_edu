import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100% ${(props) => props.className};
  height: 0 ${(props) => props.className};
  display: block ${(props) => props.className};
  display: none ${(props) => props.className};
`;

export const ModalBody = styled.div`
  max-width: 500px;
  margin: auto;
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-height: 100%;
  position: absolute;
  border: 1px solid #6969d7;
`;

export const ModalClose = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;

  svg {
    font-size: 30px;
    cursor: pointer;
    color: #6969d7;
    border: 1px solid;
    border-radius: 50%;
  }
`;

export const Title = styled.h2`
  font-size: 26px;
  margin-bottom: 14px;
`;

export const SubTitle = styled.p`
  font-size: 18px;
  margin-bottom: 14px;
`;

export const Tags = styled.ul`
  display: flex;
  align-items: center;
`;
export const Tag = styled.li`
  border: 1px solid black;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  margin-right: 5px;

  &:hover {
    background-color: #6969d7;
    color: white;
    border-color: #6969d7;
  }
`;
