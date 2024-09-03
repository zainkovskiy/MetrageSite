import { configureStore } from '@reduxjs/toolkit';
import MainInfoSlice from './slices/MainInfoSlice';
import objectsSlice from './slices/objectsSlice';
import rieltorsSlice from './slices/rieltorsSlice';

export const store = configureStore({
  reducer: {
    main: MainInfoSlice,
    object: objectsSlice,
    rieltors: rieltorsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
