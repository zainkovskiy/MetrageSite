import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/smart/ Nav';

const App = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default App;
