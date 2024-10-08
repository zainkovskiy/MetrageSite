import { configureStore } from '@reduxjs/toolkit';
import MainInfoSlice from './slices/MainInfoSlice';
import objectsSlice from './slices/objectsSlice';
import rieltorsSlice from './slices/rieltorsSlice';
import contactsSlice from './slices/contactsSlice';
import newBuildingsSlice from './slices/newBuildingsSlice';
import aboutSlice from './slices/aboutSlice';
import articlesSlice from './slices/articlesSlice';

export const store = configureStore({
  reducer: {
    main: MainInfoSlice,
    object: objectsSlice,
    rieltors: rieltorsSlice,
    contacts: contactsSlice,
    newbuildings: newBuildingsSlice,
    about: aboutSlice,
    articles: articlesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
