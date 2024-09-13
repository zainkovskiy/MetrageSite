export interface IContactsClusters {
  UID: number;
  clusterName: string;
  centroid: { lat: number; lng: number };
  offices: IContactsOffice[];
}
export interface IContactsOffice {
  UID: number;
  address: string;
  name: string;
  centroid: { lat: number; lng: number };
  officeNumber: number;
  phones: string;
  officeMail: string;
  operatingMode: string;
}
