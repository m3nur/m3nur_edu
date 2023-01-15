import React from "react";
import { useSelector } from "react-redux";
import { SubTitle, Tag, Tags, Title } from "../Modal/Modal.styled";
import { Link, useLocation } from "react-router-dom";
import { BsLink45Deg } from "react-icons/bs";
import { LinkToVisit, Number, Show, Stat, Stats, Time } from "./Product.styled";
import moment from "moment";

const Product = (props) => {
  const location = useLocation();
  const product = useSelector((state) =>
    state.goldVault.goldVault.find((el) => el._id === props.props)
  );
  const admin = location.pathname === "/admin";

  return (
    <>
      <LinkToVisit href={product.link} target="_blank">
        <Title>
          {product?.title} <BsLink45Deg />
        </Title>
      </LinkToVisit>
      <SubTitle>{product?.desc}</SubTitle>
      <Tags>
        {product?.tags?.map((el) => (
          <Link key={el} to={`/${el}`}>
            <Tag>#{el}</Tag>
          </Link>
        ))}
      </Tags>
      {admin && <Show>{product?.link}</Show>}
      <Time>
        {moment(product?.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
      </Time>
      <Stats>
        <Stat>
          <Number>{product?.visit}</Number> Views
        </Stat>
        <Stat>
          <Number>{product?.likes.length}</Number> Likes
        </Stat>
      </Stats>
    </>
  );
};

export default Product;
