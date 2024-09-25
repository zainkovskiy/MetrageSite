import { DaDataAddress, DaDataSuggestion } from 'react-dadata';

export interface IRealtors {
  UID: number;
  avatar: string;
  firstName: string;
  lastName: string;
  officeName: string;
  phone: string;
  speciality: string;
}
export interface IRealtorFull {
  UID: number;
  aboutUs: string;
  firstName: string;
  lastName: string;
  position: string;
  avatar: string;
  officeName: string;
  userChief: IRieltorChef;
  phones: string[];
  email: string;
  socNetworks: ISocNetworkAndReview[];
  objects: IRieltorObject[];
  reviews: ISocNetworkAndReview[];
  specialisation: string[];
  rewards: IRieltorRewards[];
}
export interface ISocNetworkAndReview {
  image: string;
  title: string;
  URL: string;
}
export interface IRieltorObject {
  UID: number;
  address: string;
  photo: string;
  typeCard: string;
  price: string;
  typeObject: string;
  totalArea: number;
}
export interface IRieltorChef {
  UID: number;
  firstName: string;
  lastName: string;
  avatar: string;
}
export interface IRieltorRewards {
  image: string;
  title: string;
}
export interface IRealtorsSearch {
  UID: number;
  firstName: string;
  lastName: string;
}

export interface IEmailData {
  email: string;
}
export interface IFormNamePhoneData {
  name?: string;
  phone: string;
}
export interface IFormTakeNewBuilding extends IFormNamePhoneData {
  erid: string;
}

export interface IFilterFormData {
  typeEstate: string;
  subTypeEstate: string | string[];
  roomsCount: string[];
  isStudio: boolean;
  priceFrom: number | null;
  priceTo: number | null;
  priceType: string;
  areaFrom: number | null;
  areaTo: number | null;
  address: DaDataSuggestion<DaDataAddress> | undefined;
}
export interface IFilterSellFormData {
  objectType: string;
  phone: string;
}
export interface IMetro {
  name: string;
  iconDist: string;
  distantion: string;
}
