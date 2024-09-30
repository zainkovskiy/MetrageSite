import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IAPI, IGetAboutPage } from '../../models/api';
import axios from 'axios';
import { IAboutSlice } from '../typesStore/sliceType';
const API = 'https://crm.metragegroup.com/API/site.php';

export const getAboutPage = createAsyncThunk('about/getAboutPage', async () => {
  const res = await axios.post<IAPI<IGetAboutPage>>(API, {
    method: 'site.about.get',
  });
  return res.data.result || null;
});

const initialState: IAboutSlice = {
  data: null,
};

const aboutSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAboutPage.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const {} = aboutSlice.actions;
export default aboutSlice.reducer;
