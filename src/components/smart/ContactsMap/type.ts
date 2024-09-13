import { IContactsOffice } from '../../../core/models/contacts';

export interface IContactMap {
  center: { lat: number; lng: number } | null;
  offices: IContactsOffice[];
}
