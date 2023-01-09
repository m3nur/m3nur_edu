import React from "react";
import { useSelector } from "react-redux";
import { SubTitle, Tag, Tags, Title } from "../Modal/Modal.styled";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { BsLink45Deg } from "react-icons/bs";

const Show = styled.span`
  font-size: 20px;
  word-break: break-word;
`;

const LinkToVisit = styled.a``;

const Product = (props) => {
  const location = useLocation();
  const productFromDisplay = useSelector((state) =>
    state.goldVault.goldVault.find((el) => el._id === props.props)
  );
  const admin = location.pathname === "/admin";

  return (
    <>
      <LinkToVisit href={productFromDisplay.link} target="_blank">
        <Title>
          {productFromDisplay?.title} <BsLink45Deg />
        </Title>
      </LinkToVisit>
      <SubTitle>{productFromDisplay?.desc}</SubTitle>
      <Tags>
        {productFromDisplay?.tags?.map((el) => (
          <Link key={el} to={`/${el}`} target="_blank">
            <Tag>#{el}</Tag>
          </Link>
        ))}
      </Tags>
      {admin && <Show>{productFromDisplay?.link}</Show>}
    </>
  );
};

export default Product;
