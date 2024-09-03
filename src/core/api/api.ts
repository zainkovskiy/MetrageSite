import axios from 'axios';
import { IAPI, ISetForm, ISimleAnswer } from '../models/api';
import {
  IEmailData,
  IFormNamePhoneData,
  IRealtorFull,
  IRealtorsSearch,
} from '../models/main';
const API = 'https://crm.metragegroup.com/API/site.php';

export const subscribe = async (form: ISetForm<IEmailData>) => {
  const res = await axios.post<IAPI<ISimleAnswer>>(API, {
    method: 'site.client.setForm',
    fields: form,
  });
  if (res.statusText === 'OK') {
    return res.data.result;
  }
  return false;
};
export const sendNamePhoneForm = async (form: ISetForm<IFormNamePhoneData>) => {
  const res = await axios.post<IAPI<ISimleAnswer>>(API, {
    method: 'site.client.setForm',
    fields: form,
  });
  if (res.statusText === 'OK') {
    return res.data.result;
  }
  return false;
};
export const getNumberPhone = async (UID: number) => {
  const res = await axios.post<IAPI<string>>(API, {
    method: 'site.team.getPhone',
    fields: {
      UID: UID,
    },
  });
  if (res.statusText === 'OK') {
    return res.data.result;
  }
  return false;
};
export const findRealtors = async (raw: {
  location: string;
  request: string;
}) => {
  const res = await axios.post<IAPI<IRealtorsSearch[]>>(API, {
    method: 'site.team.search',
    fields: raw,
  });
  if (res.statusText === 'OK') {
    return res.data.result;
  }
  return false;
};
export const getOneRealtor = async (UID: string) => {
  const res = await axios.post<IAPI<IRealtorFull>>(API, {
    method: 'site.team.getFullCard',
    fields: {
      UID: UID,
    },
  });
  if (res.statusText === 'OK') {
    return res.data.result;
  }
  return null;
};
