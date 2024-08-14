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

export interface IRegion {
  region: string;
}
export interface IMainData {
  team: IRealtors[];
  newbuildings: INewBuildings[];
}
