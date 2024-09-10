import { LatLngBounds } from 'leaflet';
import { IGetObjects, IGetRealtors } from '../../models/api';
import { IFilterFormData, INewBuildings, IRealtors } from '../../models/main';

export interface IMainSlice {
  region: string;
  newBuildings: INewBuildings[] | [];
  realtors: IRealtors[] | [];
}
export interface IObjectsSlice {
  filter: IFilterFormData;
  data: IGetObjects | null;
  sort: string;
  bBox: LatLngBounds | null;
}
export interface IRealtorsSlice {
  data: IGetRealtors | null;
}
