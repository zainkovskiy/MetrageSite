import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IAPI, IMainData, IRegion } from '../../models/api';
import axios from 'axios';
import { IMainSlice } from '../typesStore/sliceType';
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
      location: region,
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
  loading: true,
  letterCheff: false,
};

const MainInfoSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setRegion(state, action: PayloadAction<string>) {
      state.region = action.payload;
    },
    openLetterCheff(state) {
      state.letterCheff = true;
    },
    closeLetterCheff(state) {
      state.letterCheff = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getRegion.fulfilled, (state, action) => {
        if (action.payload && action.payload !== state.region) {
          state.region = action.payload;
        }
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.newBuildings = action.payload?.newbuildings || [];
        state.realtors = action.payload?.team || [];
        state.loading = false;
      });
  },
});

export const { setRegion, openLetterCheff, closeLetterCheff } =
  MainInfoSlice.actions;
export default MainInfoSlice.reducer;
