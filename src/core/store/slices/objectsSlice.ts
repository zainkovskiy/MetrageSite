import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IAPI, IRegion } from '../../models/api';
import axios from 'axios';
import { IObjectsSlice } from '../typesStore/sliceType';
import { defaultFilter } from '../../constants/filter';
import { IFilterFormData } from '../../models/main';
const API = 'https://crm.metragegroup.com/API/site.php';

export const getObjects = createAsyncThunk(
  'objects/getObjects',
  async (_, {}) => {
    const res = await axios.post(API, {
      method: 'site.objects.find',
      fields: {},
    });
    if (res?.statusText === 'OK') {
      console.log(res);
    }
  }
);

const initialState: IObjectsSlice = {
  filter: defaultFilter,
  objects: [],
};

const objectsSlice = createSlice({
  name: 'objects',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<IFilterFormData>) {
      state.filter = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getObjects.fulfilled, (state, action) => {});
  },
});

export const { setFilter } = objectsSlice.actions;
export default objectsSlice.reducer;
