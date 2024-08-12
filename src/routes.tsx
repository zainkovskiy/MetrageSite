import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import MainPage from './components/pages/MainPage';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/buy',
        element: <div></div>,
      },
      {
        path: '/sell',
        element: <div></div>,
      },
      {
        path: '/mortgage',
        element: <div></div>,
      },
    ],
  },
]);
