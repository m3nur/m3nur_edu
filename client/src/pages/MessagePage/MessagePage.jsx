import React, { useEffect } from "react";
import {
  Bottom,
  Box,
  Container,
  Empty,
  Message,
  MessageTitle,
  MessageWrapper,
  Sent,
  Title,
  Top,
} from "./MessagePage.styled";
import { useDispatch, useSelector } from "react-redux";
import { deleteMessage, getMessages } from "../../redux/apiCalls";
import { BiMessageSquareDetail, BiTrash } from "react-icons/bi";
import { FaSadTear } from "react-icons/fa";
import moment from "moment";

const MessagePage = () => {
  const dispatch = useDispatch();
  const boxMessages = useSelector((state) => state.messages?.messages);

  useEffect(() => {
    getMessages(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteMessage(dispatch, id);
  };

  return (
    <Container>
      <Top>
        <Title>User Messages</Title>
        <Box title="Messages">
          <BiMessageSquareDetail /> {boxMessages?.length}
        </Box>
      </Top>
      <Bottom>
        {boxMessages.length ? (
          boxMessages?.map((el) => (
            <Message key={el._id}>
              <Sent>
                Sent: {moment(el.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
              </Sent>
              <hr style={{ margin: "5px 0", borderColor: "#5252a1" }} />
              <MessageWrapper>
                <MessageTitle>{el.message}</MessageTitle>
                <BiTrash onClick={() => handleDelete(el._id)} />
              </MessageWrapper>
            </Message>
          ))
        ) : (
          <Empty>
            No messages yet! <FaSadTear />{" "}
          </Empty>
        )}
      </Bottom>
    </Container>
  );
};

export default MessagePage;
