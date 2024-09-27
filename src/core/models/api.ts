// import { IData } from '../types/data';

import { LatLngBounds } from 'leaflet';
import { IFilterFormData, IRealtors } from './main';
import { IObjects } from './objects';
import { INewBuildings } from './newBuildings';
import { IAboutDiploms, IAboutLivePhotos, IAboutPartners } from './about';

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
  centroid: [number, number];
  items: IObjects[];
  itemsCount: number;
  pagesCount: number;
  mode: string;
}
export type IGetObjectsRaw = IFilterFormData & {
  location: string;
  direction: string;
  page: number;
  mode: string;
  bBox?: LatLngBounds | null;
};
export interface IGetNewBuildings {
  buildingState: string;
  centroid: [number, number];
  curPage: number;
  items: INewBuildings[];
  itemsCount: number;
  pagesCount: number;
}
export type IGetNewBuildingsRaw = {
  location: string;
  state: string;
  page: number;
  isMap: boolean;
  bBox?: LatLngBounds | null;
};
export type IGetAboutPage = {
  countDealDays: number;
  countDepartmants: number;
  countEmploees: number;
  diploms: IAboutDiploms[];
  livePhotos: IAboutLivePhotos[];
  partners: IAboutPartners;
};
