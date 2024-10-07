import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Nav from './components/smart/Nav';
import { useAppDispatch, useAppSelector } from './core/hooks/storeHook';
import { closeSnackBar, getRegion } from './core/store/slices/MainInfoSlice';
import Footer from './components/smart/Footer';
import styled from 'styled-components';
import WindowDialog from './components/ui/WindowDialog';
import LetterCheff from './components/smart/LetterCheff';
import Snackbar from './components/ui/Snackbar';
import Loader from './components/simple/Loader';
const App = () => {
  const dispatch = useAppDispatch();
  const { loading, letterCheff, snackBar } = useAppSelector(
    (state) => state.main
  );
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
  const onCloseSnackBar = () => {
    dispatch(closeSnackBar());
  };
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
      <Snackbar open={snackBar} onClose={onCloseSnackBar} />
      <WindowDialog open={letterCheff}>
        <LetterCheff />
      </WindowDialog>
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
