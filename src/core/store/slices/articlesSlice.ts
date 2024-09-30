import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IAPI, IGetArticlePage } from '../../models/api';
import axios from 'axios';
import { IArticleSlice } from '../typesStore/sliceType';
const API = 'https://crm.metragegroup.com/API/site.php';

export const getArticlesList = createAsyncThunk(
  'articles/getArticlesList',
  async () => {
    const res = await axios.post<IAPI<IGetArticlePage>>(API, {
      method: 'site.articles.getList',
    });
    return res.data.result || null;
  }
);

const initialState: IArticleSlice = {
  sections: [],
};

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getArticlesList.fulfilled, (state, action) => {
      if (Array.isArray(action.payload.data)) {
        state.sections = action.payload.data;
      }
    });
  },
});

export const {} = articlesSlice.actions;
export default articlesSlice.reducer;
