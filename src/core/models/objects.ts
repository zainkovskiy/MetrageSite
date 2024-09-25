import { IMetro, IRealtors } from './main';

export interface IObjects {
  UID: number;
  typeCard: string;
  address: string;
  photo: string;
  price: string;
  pricePerMeter: number;
  floor: string;
  lat: number;
  lng: number;
  typeObject: string;
  totalArea: number;
}

export interface IObjectsFull {
  // [key: string]: any;
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
  lat: number;
  lng: number;
  description: string;
  buildingTotalArea: string;
  landStatus: string;
  waterPipesCount: string;
  realtor: IRealtors;
  complex: IObjectsFullComplex;
  images: string[];
  possibleKeys: IPossibleKeys[];
  similar: ISimilarObject[];
  metro: IMetro[];
}
export interface IObjectsFullComplex {
  UID: string;
  name: string;
  picture: string;
}

export interface ISimilarObject {
  UID: number;
  address: string;
  photo: string;
  typeCard: string;
  price: string;
  typeObject: string;
  totalArea: number;
}
export interface IPossibleKeys {
  key: string;
  title: string;
}
