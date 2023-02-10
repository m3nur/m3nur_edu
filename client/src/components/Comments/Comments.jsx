import React from 'react';
import {
  Button,
  Comment,
  CommentList,
  Content,
  Input,
  InputWrapper,
  Title,
  Wrapper,
} from './Comments.styled';

const Comments = () => {
  return (
    <Wrapper>
      <Title>21 comments</Title>
      <Content>
        <InputWrapper>
          <Input />
          <Button>Submit</Button>
        </InputWrapper>
        <CommentList>
          <Comment></Comment>
        </CommentList>
      </Content>
    </Wrapper>
  );
};

export default Comments;
