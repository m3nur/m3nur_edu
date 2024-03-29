import React, { useEffect, useState } from 'react';
import {
  Bottom,
  BottomWrapper,
  HR,
  Presentation,
  PresentSubTitle,
  PresentTitle,
  ProductPresentation,
  Small,
  SmallWrapper,
  StatValue,
  SubTitle,
  Tab,
  Tabs,
  Tag,
  Tags,
  Title,
  Top,
} from './Product.styled';
import { Container } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProducts,
  likeProduct,
  unLikeProduct,
  visitProduct,
} from '../../redux/apiCalls';
import { AiFillHeart, AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai';
import { FiBarChart2 } from 'react-icons/fi';

import { Modal } from '../../components';

//There is a problem here, when you click on the component, it is rendered 3 times, you need to solve

const Product = () => {
  const goldVault = useSelector(
    (state) =>
      state.goldVault.goldVault
        ?.filter((el) => el.recommended)
        ?.sort((a, b) => b.visit - a.visit) //Sorting by likes will be better than visiting)
  );
  const success = useSelector((state) => state.goldVault.success);
  const userID = useSelector((state) => state.user?.user?._id);

  const dispatch = useDispatch();

  const [tagValue, setTagValue] = useState('');

  const handleClick = (e) => {
    setTagValue(e);
  };

  const recommended = goldVault?.filter((el) => el.tags.includes(tagValue));

  const [modal, setModal] = useState({
    modalDisplay: {
      display: false,
      product: {},
    },
    modalShare: {
      display: false,
      product: {},
    },
  });

  const handleIncrement = (id, visit) => {
    const product = { visit: visit + 1 };
    visitProduct(dispatch, id, product);
  };

  const handleLike = (id) => {
    const productID = goldVault?.filter((el) => el._id.includes(id));
    const val = productID[0].likes.includes(userID);
    if (val) {
      unLikeProduct(dispatch, productID, userID);
    } else {
      likeProduct(dispatch, productID, userID);
    }
  };

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch, success]);

  return (
    <ProductPresentation>
      <Modal
        whoIam={'display'}
        isOpened={modal.modalDisplay}
        onModalClose={() =>
          setModal({
            ...modal,
            modalDisplay: {
              display: false,
            },
          })
        }
      />
      <Modal
        whoIam={'share'}
        isOpened={modal.modalShare}
        onModalClose={() =>
          setModal({
            ...modal,
            modalShare: {
              display: false,
            },
          })
        }
      />
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
                name=''
                onClick={(e) => handleClick(e.target.getAttribute('name'))}
              >
                #All
              </Tab>
              <Tab
                name='javascript'
                onClick={(e) => handleClick(e.target.getAttribute('name'))}
              >
                #JavaScript
              </Tab>
              <Tab
                name='html'
                onClick={(e) => handleClick(e.target.getAttribute('name'))}
              >
                #HTML
              </Tab>
              <Tab
                name='react'
                onClick={(e) => handleClick(e.target.getAttribute('name'))}
              >
                #React
              </Tab>
              <Tab
                name='css'
                onClick={(e) => handleClick(e.target.getAttribute('name'))}
              >
                #CSS
              </Tab>
              <Tab
                name='animation'
                onClick={(e) => handleClick(e.target.getAttribute('name'))}
              >
                #Animation
              </Tab>
              <Tab
                name='photo'
                onClick={(e) => handleClick(e.target.getAttribute('name'))}
              >
                #Photo
              </Tab>
            </Tabs>
            <BottomWrapper>
              {tagValue ? (
                <>
                  {recommended?.map((el) => (
                    <Small key={el._id}>
                      <SmallWrapper
                        onClick={() => {
                          setModal({
                            ...modal,
                            modalDisplay: {
                              display: true,
                              product: el._id,
                            },
                          });
                          handleIncrement(el._id, el.visit);
                        }}
                      >
                        <PresentTitle>{el.title}</PresentTitle>
                        <PresentSubTitle>{el.desc}</PresentSubTitle>
                        <Tag>
                          {el.tags?.map((el, index) => (
                            <Tags key={index}>#{el}</Tags>
                          ))}
                        </Tag>
                      </SmallWrapper>
                      <HR />
                      <Tag className='bottomBTNs'>
                        <Tags className='bottomBTN chart'>
                          <FiBarChart2 />
                          <StatValue>{el.visit}</StatValue>
                        </Tags>
                        <Tags
                          className='bottomBTN share'
                          onClick={() =>
                            setModal({
                              ...modal,
                              modalShare: {
                                display: true,
                                product: el._id,
                              },
                            })
                          }
                        >
                          <AiOutlineShareAlt />
                        </Tags>
                        <Tags
                          className='bottomBTN heart'
                          onClick={() => handleLike(el._id)}
                        >
                          {el?.likes?.includes(userID) ? (
                            <AiFillHeart style={{ color: 'red' }} />
                          ) : (
                            <AiOutlineHeart />
                          )}
                          <StatValue>{el.likes.length}</StatValue>
                        </Tags>
                      </Tag>
                    </Small>
                  ))}
                </>
              ) : (
                <>
                  {goldVault?.map((el) => (
                    <Small key={el._id}>
                      <SmallWrapper
                        onClick={() => {
                          setModal({
                            ...modal,
                            modalDisplay: {
                              display: true,
                              product: el._id,
                            },
                          });
                          handleIncrement(el._id, el.visit);
                        }}
                      >
                        <PresentTitle>{el.title}</PresentTitle>
                        <PresentSubTitle>{el.desc}</PresentSubTitle>
                        <Tag>
                          {el.tags?.map((el, index) => (
                            <Tags key={index}>#{el}</Tags>
                          ))}
                        </Tag>
                      </SmallWrapper>
                      <HR />
                      <Tag className='bottomBTNs'>
                        <Tags className='bottomBTN chart'>
                          <FiBarChart2 />
                          <StatValue>{el.visit}</StatValue>
                        </Tags>
                        <Tags
                          className='bottomBTN share'
                          onClick={() =>
                            setModal({
                              ...modal,
                              modalShare: {
                                display: true,
                                product: el._id,
                              },
                            })
                          }
                        >
                          <AiOutlineShareAlt />
                        </Tags>
                        <Tags
                          className='bottomBTN heart'
                          onClick={() => handleLike(el._id)}
                        >
                          {el?.likes?.includes(userID) ? (
                            <AiFillHeart className='red' />
                          ) : (
                            <AiOutlineHeart />
                          )}
                          <StatValue>{el.likes.length}</StatValue>
                        </Tags>
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
  