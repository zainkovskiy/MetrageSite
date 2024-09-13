import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import MainPage from './components/pages/MainPage';
const ObjectPage = lazy(() => import('./components/pages/ObjectPage'));
const ObjectListPage = lazy(() => import('./components/pages/ObjectListPage'));
const ObjectMapPage = lazy(() => import('./components/pages/ObjectMapPage'));
const ObjectFullPage = lazy(() => import('./components/pages/ObjectFullPage'));
const RieltorPage = lazy(() => import('./components/pages/RieltorPage'));
const RieltorsPage = lazy(() => import('./components/pages/RieltorsPage'));
const СontactsPage = lazy(() => import('./components/pages/СontactsPage'));

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
            <ObjectPage />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: <ObjectListPage />,
          },
          {
            path: 'map',
            element: <ObjectMapPage />,
          },
        ],
      },
      {
        path: 'buy/:type/:id',
        element: (
          <Suspense>
            <ObjectFullPage />
          </Suspense>
        ),
      },
      {
        path: 'rent',
        element: (
          <Suspense>
            {' '}
            <ObjectPage />{' '}
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: <ObjectListPage />,
          },
          {
            path: 'map',
            element: <ObjectMapPage />,
          },
        ],
      },
      {
        path: 'rent/:type/:id',
        element: (
          <Suspense>
            <ObjectFullPage />
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
      {
        path: 'contacts/',
        element: (
          <Suspense>
            <СontactsPage />
          </Suspense>
        ),
      },
    ],
  },
]);
