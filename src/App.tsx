import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/smart/Nav';
import { useAppDispatch } from './core/hooks/storeHook';
import { getRegion } from './core/store/slices/MainInfoSlice';
const App = () => {
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
    </>
  );
};

export default App;
