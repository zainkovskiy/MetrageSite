import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IAPI } from '../../models/api';
import axios from 'axios';
import { IContactsSlice } from '../typesStore/sliceType';
import { IFilterFormData } from '../../models/main';
import { IContactsClusters } from '../../models/contacts';
const API = 'https://crm.metragegroup.com/API/site.php';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    const res = await axios.post<IAPI<IContactsClusters[]>>(API, {
      method: 'site.contacts.list',
    });
    return res.data.result || null;
  }
);

const initialState: IContactsSlice = {
  data: null,
  loading: true,
  index: 0,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setIndex(state, action: PayloadAction<number>) {
      state.index = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getContacts.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
  },
});

export const { setIndex } = contactsSlice.actions;
export default contactsSlice.reducer;
