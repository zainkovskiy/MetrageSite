import { LatLngBounds } from 'leaflet';
import {
  IGetAboutPage,
  IGetNewBuildings,
  IGetObjects,
  IGetRealtors,
} from '../../models/api';
import { IFilterFormData, IRealtors } from '../../models/main';
import { IContactsClusters } from '../../models/contacts';
import { INewBuildings } from '../../models/newBuildings';
import { IArticleSection } from '../../models/article';

export interface IMainSlice {
  region: string;
  newBuildings: INewBuildings[] | [];
  realtors: IRealtors[] | [];
  loading: boolean;
  letterCheff: boolean;
  snackBar: boolean;
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
export interface IContactsSlice {
  data: IContactsClusters[] | null;
  loading: boolean;
  index: number;
}
export interface INewBuildingsSlice {
  data: IGetNewBuildings | null;
  stateFilter: string;
  bBox: LatLngBounds | null;
}
export interface IAboutSlice {
  data: IGetAboutPage | null;
}
export interface IArticleSlice {
  sections: IArticleSection[] | [];
}
