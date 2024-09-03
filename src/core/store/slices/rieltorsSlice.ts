import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IAPI, IGetRealtors } from '../../models/api';
import axios from 'axios';
import { IMainSlice, IRealtorsSlice } from '../typesStore/sliceType';
import { IFilterFormData } from '../../models/main';
const API = 'https://crm.metragegroup.com/API/site.php';

export const getRieltors = createAsyncThunk<
  IGetRealtors,
  undefined,
  { rejectValue: string; state: { main: IMainSlice } }
>('rieltors/getRieltors', async (_, { getState, rejectWithValue }) => {
  const res = await axios.post<IAPI<IGetRealtors>>(API, {
    method: 'site.team.list',
    fields: {
      location: getState().main.region,
    },
  });
  if (res?.statusText !== 'OK') {
    return rejectWithValue('Error getRieltors');
  }
  return res.data.result || null;
});

const initialState: IRealtorsSlice = {
  data: null,
};

const rieltorsSlice = createSlice({
  name: 'rieltors',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<IFilterFormData>) {},
  },
  extraReducers(builder) {
    builder.addCase(getRieltors.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const { setFilter } = rieltorsSlice.actions;
export default rieltorsSlice.reducer;
