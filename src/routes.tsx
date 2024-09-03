import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import MainPage from './components/pages/MainPage';
const BuyPage = lazy(() => import('./components/pages/BuyPage'));
const RieltorPage = lazy(() => import('./components/pages/RieltorPage'));
const RieltorsPage = lazy(() => import('./components/pages/RieltorsPage'));

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
        path: 'buy',
        element: (
          <Suspense>
            <BuyPage />
          </Suspense>
        ),
      },
      {
        path: 'sell',
        element: <div></div>,
      },
      {
        path: 'mortgage',
        element: <div></div>,
      },
      {
        path: 'rieltors',
        element: (
          <Suspense>
            <RieltorsPage />
          </Suspense>
        ),
      },
      {
        path: 'rieltors/:id',
        element: (
          <Suspense>
            <RieltorPage />
          </Suspense>
        ),
      },
    ],
  },
]);
