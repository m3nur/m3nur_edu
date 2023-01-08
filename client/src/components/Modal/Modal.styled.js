import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  z-index: 9999;

  &.true {
    height: 100%;
    display: block;
  }

  &.false {
    height: 0;
    display: none;
  }
`;

export const ModalCenter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  width: 500px;
  background: white;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #6969d7;

  &.update {
    width: 800px;
  }
`;

export const ModalClose = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 20px;

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

  svg {
    vertical-align: bottom;
    margin-left: 10px;
  }
`;

export const SubTitle = styled.p`
  font-size: 18px;
`;

export const Tags = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 22px 0;
`;

export const Tag = styled.li`
  border: 1px solid black;
  padding: 6px;
  font-size: 18px;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  margin: 0 4px 6px 0;

  &:hover {
    background-color: #6969d7;
    color: white;
    border-color: #6969d7;
  }
`;

export const Update = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 8px 6px;
  font-size: 18px;
  border-radius: 8px;
  outline: none;
  border: 1px solid #6969d7;
  margin: 10px 0;

  &.tag {
    margin: 0;
    width: 100%;
  }
`;

export const Textarea = styled.textarea`
  height: 100px;
  padding: 8px 6px;
  font-size: 18px;
  border-radius: 8px;
  outline: none;
  border: 1px solid #6969d7;
  margin: 10px 0;
`;

export const Label = styled.label`
  font-size: 20px;
`;

export const Button = styled.button`
  padding: 8px;
  background: #6969d7;
  border: 1px solid #6969d7;
  border-radius: 8px;
  color: white;
  font-size: 20px;
  font-weight: 800;
  cursor: pointer;
  margin-top: 20px;
`;
