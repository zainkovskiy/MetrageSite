import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Nav from './components/smart/Nav';
import { useAppDispatch, useAppSelector } from './core/hooks/storeHook';
import { getRegion } from './core/store/slices/MainInfoSlice';
import Footer from './components/smart/Footer';
import styled from 'styled-components';
const App = () => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.main);
  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    if (loading) {
      return;
    }
    if (globalReferer) {
      navigate(`/${globalReferer}/${globalRefererId}`);
    }
  }, [loading]);
  const getData = () => {
    dispatch(getRegion());
  };
  if (loading) {
    return <LoadingTime>Загрузка...</LoadingTime>;
  }
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

const LoadingTime = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-family: ${({ theme }) => theme.font.regular};
  color: ${({ theme }) => theme.palette.primary};
`;

export default App;
