import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/smart/Nav';
import { useAppDispatch } from './core/hooks/storeHook';
import { getRegion } from './core/store/slices/MainInfoSlice';
import Footer from './components/smart/Footer';
const App = () => {
  console.log(globalReferer);
  console.log(globalRefererId);

  const dispatch = useAppDispatch();
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    dispatch(getRegion());
  };
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
