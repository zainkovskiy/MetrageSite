import { DaDataAddress, DaDataSuggestion } from 'react-dadata';

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
