// import { IData } from '../types/data';

import { LatLngBounds } from 'leaflet';
import { IFilterFormData, INewBuildings, IRealtors } from './main';
import { IObjects } from './objects';

export interface IAPI<I> {
  meta: IMeta;
  request: string;
  result: I;
}

interface IMeta {
  edTime: number;
  estimated: string;
  stTime: number;
}

export type ISimpleAnswer = boolean;

export interface IRegion {
  region: string;
}
export interface IMainData {
  team: IRealtors[];
  newbuildings: INewBuildings[];
}

export interface ISetForm<F> {
  URL: string;
  location: string;
  formData: F;
}
export interface IGetRealtors {
  curPage: number;
  items: IRealtors[];
  itemsCount: number;
  pagesCount: number;
}
export interface IGetObjects {
  curPage: number;
  centroid: [string, string];
  items: IObjects[];
  itemsCount: number;
  pagesCount: number;
}
export type IGetObjectsRaw = IFilterFormData & {
  location: string;
  direction: string;
  page: number;
  mode: string;
  bBox?: LatLngBounds | null;
};
