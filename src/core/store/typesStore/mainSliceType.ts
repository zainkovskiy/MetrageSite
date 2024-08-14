import { INewBuildings, IRealtors } from '../../models/main';

export interface IMainSlice {
  region: string;
  newBuildings: INewBuildings[] | [];
  realtors: IRealtors[] | [];
}
