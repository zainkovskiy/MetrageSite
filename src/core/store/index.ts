import { configureStore } from '@reduxjs/toolkit';
import MainInfoSlice from './slices/MainInfoSlice';
import objectsSlice from './slices/objectsSlice';
import rieltorsSlice from './slices/rieltorsSlice';
import contactsSlice from './slices/contactsSlice';
import newBuildingsSlice from './slices/newBuildingsSlice';

export const store = configureStore({
  reducer: {
    main: MainInfoSlice,
    object: objectsSlice,
    rieltors: rieltorsSlice,
    contacts: contactsSlice,
    newbuildings: newBuildingsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
