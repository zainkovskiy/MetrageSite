import { IGetRealtors } from '../../models/api';
import { IFilterFormData, INewBuildings, IRealtors } from '../../models/main';

export interface IMainSlice {
  region: string;
  newBuildings: INewBuildings[] | [];
  realtors: IRealtors[] | [];
}
export interface IObjectsSlice {
  objects: [];
  filter: IFilterFormData;
}
export interface IRealtorsSlice {
  data: IGetRealtors | null;
}
