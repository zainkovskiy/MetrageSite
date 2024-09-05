import { IRealtors } from './main';

export interface IObjects {
  UID: number;
  typeCard: string;
  address: string;
  photo: string;
  price: string;
  pricePerMeter: number;
  floor: string;
  lat: string;
  lng: string;
}

export interface IObjectsFull {
  type: string;
  UID: number;
  category: string;
  price: number;
  pricePerMeter: number;
  vatType: string;
  roomCount: number;
  totalArea: string;
  kitchenArea: string;
  livingArea: string;
  landArea: string;
  floor: number;
  floors: number;
  address: string;
  lat: string;
  lng: string;
  description: string;
  buildingTotalArea: string;
  landStatus: string;
  waterPipesCount: string;
  realtor: IRealtors;
  // complex: null;
  images: string[];
  possibleKeys: IPossibleKeys[];
  similar: ISimilarObject[];
}
export interface ISimilarObject {
  UID: number;
  address: string;
  photo: string;
  typeCard: string;
  price: string;
}
export interface IPossibleKeys {
  [key: string]: string;
  title: string;
}
