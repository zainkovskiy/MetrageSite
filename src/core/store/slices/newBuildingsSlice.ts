import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IAPI, IGetNewBuildings, IGetNewBuildingsRaw } from '../../models/api';
import axios from 'axios';
import { INewBuildingsSlice } from '../typesStore/sliceType';
import { LatLngBounds } from 'leaflet';
const API = 'https://crm.metragegroup.com/API/site.php';

export const getNewbuildingsList = createAsyncThunk(
  'newbuildings/getNewbuildingsList',
  async (raw: IGetNewBuildingsRaw) => {
    const res = await axios.post<IAPI<IGetNewBuildings>>(API, {
      method: 'site.newbuildings.list',
      fields: raw,
    });
    if (res?.statusText === 'OK') {
      return res.data.result || null;
    }
    return null;
  }
);

const initialState: INewBuildingsSlice = {
  data: null,
  stateFilter: 'all',
  bBox: null,
};

const newBuildingsSlice = createSlice({
  name: 'newbuildings',
  initialState,
  reducers: {
    setBBoxBuild(state, action: PayloadAction<LatLngBounds>) {
      state.bBox = action.payload;
    },
    setStateFilter(state, action: PayloadAction<string>) {
      state.stateFilter = action.payload;
    },
    cleareState(state) {
      state.bBox = null;
      state.data = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(getNewbuildingsList.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const { setBBoxBuild, setStateFilter } = newBuildingsSlice.actions;
export default newBuildingsSlice.reducer;
