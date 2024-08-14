import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IAPI, IMainData, IRegion } from '../../models/api';
import axios from 'axios';
import { IMainSlice } from '../typesStore/mainSliceType';
const API = 'https://crm.metragegroup.com/API/site.php';

export const getRegion = createAsyncThunk(
  'main/getRegion',
  async (_, { dispatch }) => {
    const res = await axios.post<IAPI<IRegion>>(API, {
      method: 'site.client.check',
    });
    if (res?.statusText === 'OK') {
      const data = res?.data?.result || null;
      if (data?.region) {
        dispatch(fetchData(data.region));
        return data?.region;
      }
    }
  }
);
export const fetchData = createAsyncThunk(
  'main/fetchData',
  async (region: string) => {
    const res = await axios.post<IAPI<IMainData>>(API, {
      method: 'site.client.getMain',
    });
    if (res?.statusText === 'OK') {
      const data = res?.data?.result || null;
      return data;
    }
    return null;
  }
);

const initialState: IMainSlice = {
  region: 'msk',
  newBuildings: [],
  realtors: [],
};

const MainInfoSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getRegion.fulfilled, (state, action) => {
        if (action.payload) state.region = action.payload;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.newBuildings = action.payload?.newbuildings || [];
        state.realtors = action.payload?.team || [];
      });
  },
});

export const {} = MainInfoSlice.actions;
export default MainInfoSlice.reducer;
