// import { IData } from '../types/data';

import { INewBuildings, IRealtors } from './main';

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

export type ISimleAnswer = boolean;

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
