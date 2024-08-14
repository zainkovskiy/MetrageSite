import React from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalStyle } from './rootStyle';
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import { rootTheme } from './core/theme/rootTheme';
import { Provider } from 'react-redux';
import { store } from './core/store';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={rootTheme}>
      <RouterProvider router={routes} />
      <GlobalStyle />
    </ThemeProvider>
  </Provider>
);
