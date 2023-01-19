import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import {
  Bottom,
  GoldVault,
  Info,
  Left,
  Right,
  Tag,
  Tags,
  Title,
  Top,
  Item,
  Items,
  RightTag,
  RightTags,
  RightTitle,
  Wrapper,
  TLeft,
  TRight,
  BTN,
} from './GoldVaultPage.styled';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CiVault } from 'react-icons/ci';
import {
  getProducts,
  likeProduct,
  unLikeProduct,
  visitProduct,
} from '../../redux/apiCalls';
import { Modal } from '../../components';
import { AiFillHeart, AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai';
import { FiBarChart2 } from 'react-icons/fi';
import { StatValue } from '../Product/Product.styled';

const GoldVaults = () => {
  const location = useLocation();
  const loc = location.pathname.split('/')[2];
  const tags = [];
  const dispatch = useDispatch();
  const goldVault = useSelector((state) => state?.goldVault?.goldVault);
  const userID = useSelector((state) => state?.user?.user?._id);
  const success = useSelector((state) => state?.goldVault.success);
  const suitable = goldVault.filter((el) =>
    loc === 'all' ? el : el.tags.includes(loc)
  );
  const [btnName, setBtnName] = useState();
  const [sorted, setSorted] = useState();

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

  useSelector((state) =>
    state.goldVault.goldVault.filter((el) =>
      el.tags.forEach((el) => tags.push(el))
    )
  );

  const uniqueTags = tags
    .filter((el, index) => {
      return tags.indexOf(el) === index;
    })
    .sort((a, b) => a.split('').length - b.split('').length);

  const handleIncrement = (id, visit) => {
    const product = { visit: visit + 1 };
    visitProduct(dispatch, id, product);
  };

  const handleLike = (id) => {
    const productID = goldVault.filter((el) => el._id.includes(id));
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

  useEffect(() => {
    if (btnName === 'top') {
      return setSorted(
        suitable.map((el) => el).sort((a, b) => b.visit - a.visit)
      );
    } else if (btnName === 'newest') {
      return setSorted(
        suitable.map((el) => el).sort((a, b) => (a.visit > b.visit ? 1 : -1))
      );
    } else if (btnName === 'latest') {
      return setSorted(
        suitable.map((el) => el).sort((a, b) => (a.visit < b.visit ? 1 : -1))
      );
    }
    //To avoid error (maximum update depth exceeded).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [btnName, JSON.stringify(suitable)]);

  return (
    <>
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
        <GoldVault>
          <Left>
            <Title>My Tags</Title>
            <Tags>
              <Tag>
                <Link to='/t/all'>#all</Link>
              </Tag>
              {uniqueTags?.map((el, index) => (
                <Tag key={index}>
                  <Link to={`/t/${el}`}>#{el}</Link>
                </Tag>
              ))}
            </Tags>
          </Left>
          <Right>
            <Top>
              <TLeft>
                <CiVault />
                <Info>: #{loc}</Info>
              </TLeft>
              <TRight>
                <BTN
                  name='top'
                  onClick={(e) => setBtnName(e.target.getAttribute('name'))}
                >
                  Top
                </BTN>
                <BTN
                  name='newest'
                  onClick={(e) => setBtnName(e.target.getAttribute('name'))}
                >
                  Newest
                </BTN>
                <BTN
                  name='latest'
                  onClick={(e) => setBtnName(e.target.getAttribute('name'))}
                >
                  Latest
                </BTN>
              </TRight>
            </Top>
            <hr style={{ margin: '5px 0' }} />
            <Bottom>
              <Items>
                {btnName
                  ? sorted?.map((el) => (
                      <Item key={el._id}>
                        <Wrapper
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
                          <RightTitle>{el.title}</RightTitle>
                          <RightTags>
                            {el.tags.map((el, index) => (
                              <RightTag className='tags' key={index}>
                                #{el}
                              </RightTag>
                            ))}
                          </RightTags>
                        </Wrapper>
                        <hr style={{ margin: '0 8px' }} />
                        <RightTags className='buttons'>
                          <RightTag className='btn'>
                            <FiBarChart2 />
                            <StatValue>{el.visit}</StatValue>
                          </RightTag>
                          <RightTag
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
                          </RightTag>
                          <RightTag onClick={() => handleLike(el._id)}>
                            {el?.likes?.includes(userID) ? (
                              <AiFillHeart style={{ color: 'red' }} />
                            ) : (
                              <AiOutlineHeart />
                            )}
                            <StatValue>{el.likes.length}</StatValue>
                          </RightTag>
                        </RightTags>
                      </Item>
                    ))
                  : suitable?.map((el) => (
                      <Item key={el._id}>
                        <Wrapper
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
                          <RightTitle>{el.title}</RightTitle>
                          <RightTags>
                            {el.tags.map((el, index) => (
                              <RightTag className='tags' key={index}>
                                #{el}
                              </RightTag>
                            ))}
                          </RightTags>
                        </Wrapper>
                        <hr style={{ margin: '0 8px' }} />
                        <RightTags className='buttons'>
                          <RightTag className='btn'>
                            <FiBarChart2 />
                            <StatValue>{el.visit}</StatValue>
                          </RightTag>
                          <RightTag
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
                          </RightTag>
                          <RightTag onClick={() => handleLike(el._id)}>
                            {el?.likes?.includes(userID) ? (
                              <AiFillHeart style={{ color: 'red' }} />
                            ) : (
                              <AiOutlineHeart />
                            )}
                            <StatValue>{el.likes.length}</StatValue>
                          </RightTag>
                        </RightTags>
                      </Item>
                    ))}
              </Items>
            </Bottom>
          </Right>
        </GoldVault>
      </Container>
    </>
  );
};

export default GoldVaults;
