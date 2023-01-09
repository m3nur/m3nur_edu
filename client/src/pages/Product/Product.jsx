import React, { useEffect, useState } from "react";
import {
  Bottom,
  BottomWrapper,
  Presentation,
  PresentSubTitle,
  PresentTitle,
  ProductPresentation,
  Small,
  SubTitle,
  Tab,
  Tabs,
  Tag,
  Tags,
  Title,
  Top,
} from "./Product.styled";
import { Container } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/apiCalls";

const Product = () => {
  const dispatch = useDispatch();
  const goldVault = useSelector((state) =>
    state.goldVault.goldVault.filter((el) => el.recommended)
  );
  const [tagValue, setTagValue] = useState("");
  const handleClick = (e) => {
    setTagValue(e);
  };
  const recommended = goldVault.filter((el) => el.tags.includes(tagValue));

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch, tagValue]);

  return (
    <ProductPresentation>
      <Container>
        <Presentation>
          <Top>
            <Title>THE BEST SITES WE RECOMMEND.</Title>
            <SubTitle>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque,
              neque.
            </SubTitle>
          </Top>
          <Bottom>
            <Tabs>
              <Tab
                name=""
                onClick={(e) => handleClick(e.target.getAttribute("name"))}
              >
                #All
              </Tab>
              <Tab
                name="JavaScript"
                onClick={(e) => handleClick(e.target.getAttribute("name"))}
              >
                #JavaScript
              </Tab>
              <Tab
                name="HTML"
                onClick={(e) => handleClick(e.target.getAttribute("name"))}
              >
                #HTML
              </Tab>
              <Tab
                name="react"
                onClick={(e) => handleClick(e.target.getAttribute("name"))}
              >
                #React
              </Tab>
              <Tab
                name="CSS"
                onClick={(e) => handleClick(e.target.getAttribute("name"))}
              >
                #CSS
              </Tab>
              <Tab
                name="animation"
                onClick={(e) => handleClick(e.target.getAttribute("name"))}
              >
                #Animation
              </Tab>
              <Tab
                name="photo"
                onClick={(e) => handleClick(e.target.getAttribute("name"))}
              >
                #Photo
              </Tab>
            </Tabs>
            <BottomWrapper>
              {tagValue ? (
                <>
                  {recommended?.map((el) => (
                    <Small key={el._id}>
                      <PresentTitle>{el.title}</PresentTitle>
                      <PresentSubTitle>{el.desc}</PresentSubTitle>
                      <Tag>
                        {el.tags?.map((el, index) => (
                          <Tags key={index}>#{el}</Tags>
                        ))}
                      </Tag>
                    </Small>
                  ))}
                </>
              ) : (
                <>
                  {goldVault?.map((el) => (
                    <Small key={el._id}>
                      <PresentTitle>{el.title}</PresentTitle>
                      <PresentSubTitle>{el.desc}</PresentSubTitle>
                      <Tag>
                        {el.tags?.map((el, index) => (
                          <Tags key={index}>#{el}</Tags>
                        ))}
                      </Tag>
                    </Small>
                  ))}
                </>
              )}
            </BottomWrapper>
          </Bottom>
        </Presentation>
      </Container>
    </ProductPresentation>
  );
};

export default Product;
