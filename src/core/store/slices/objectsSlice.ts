import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IAPI, IGetObjects, IGetObjectsRaw } from '../../models/api';
import axios from 'axios';
import { IObjectsSlice } from '../typesStore/sliceType';
import { defaultFilter } from '../../constants/filter';
import { IFilterFormData } from '../../models/main';
const API = 'https://crm.metragegroup.com/API/site.php';

export const getObjects = createAsyncThunk(
  'objects/getObjects',
  async (raw: IGetObjectsRaw, {}) => {
    const res = await axios.post<IAPI<IGetObjects>>(API, {
      method: 'site.objects.find',
      fields: raw,
    });
    if (res?.statusText === 'OK') {
      return res.data.result || null;
    }
    return null;
  }
);

const initialState: IObjectsSlice = {
  filter: defaultFilter,
  data: null,
  sort: 'default',
  bBox: null,
};

const objectsSlice = createSlice({
  name: 'objects',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<IFilterFormData>) {
      state.filter = action.payload;
    },
    setSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
    setBBox(state, action) {
      state.bBox = action.payload;
    },
    cleareState(state) {
      state.bBox = null;
      state.data = null;
      state.sort = 'default';
    },
  },
  extraReducers(builder) {
    builder.addCase(getObjects.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const { setFilter, setSort, setBBox, cleareState } =
  objectsSlice.actions;
export default objectsSlice.reducer;
