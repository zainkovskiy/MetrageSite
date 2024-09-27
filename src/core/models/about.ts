export interface IAboutDiploms {
  UID: number;
  title: string;
  URL: string;
}
export interface IAboutLivePhotos {
  UID: number;
  title: string;
  URL: string;
}
export interface IAboutPartners {
  countBanks: number;
  countBrokers: number;
  banks: IBankBroker[];
  brokers: IBankBroker[];
}
export interface IBankBroker {
  UID: number;
  URL: string;
  title: string;
}
