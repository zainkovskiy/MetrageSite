import { configureStore } from '@reduxjs/toolkit';
import MainInfoSlice from './slices/MainInfoSlice';

export const store = configureStore({
  reducer: {
    main: MainInfoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
