import { IMetro } from './main';

export interface INewBuildings {
  UID: number;
  address: string;
  deadLine: string;
  description: string;
  image: string;
  name: string;
  centroid: {
    lat: number;
    lng: number;
  };
}
export interface INewBuildingsFull {
  UID: number;
  address: string;
  appartmentItems: IAppartmentItems[];
  areaRange: string;
  buildingTypes: string;
  buyMethods: {
    hasMortgage: boolean;
    hasVoenMortgage: boolean;
    hasSubsidy: boolean;
  };
  centroid: { lat: number; lng: number };
  countBuildings: number;
  dateOfConstruction: string;
  description: string;
  developerName: string;
  developerPhone: string;
  developerPicture: string;
  images: string[];
  name: string;
  priceRange: string;
  metro: IMetro[];
}

export interface IAppartmentItems {
  UID: number;
  areaFrom: string;
  blockId: number;
  countItems: string;
  name: string;
  priceFrom: string;
}
export interface IAppartmentDetail {
  UID: number;
  areaTotal: string;
  floor: string;
  image: string;
  price: string;
  erid: string;
}
