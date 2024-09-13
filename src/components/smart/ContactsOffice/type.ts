import { IContactsOffice } from '../../../core/models/contacts';

export interface IContactsOfficeProps {
  office: IContactsOffice;
  onClick: (office: IContactsOffice) => void;
}
