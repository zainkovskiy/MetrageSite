import axios from 'axios';
import { IAPI, ISetForm, ISimpleAnswer } from '../models/api';
import {
  IEmailData,
  IFilterSellFormData,
  IFormLetterCheff,
  IFormNamePhoneData,
  IFormTakeNewBuilding,
  IRealtorFull,
  IRealtorsSearch,
} from '../models/main';
import { IObjectsFull } from '../models/objects';
import {
  IAppartmentDetail,
  IAppartmentItems,
  INewBuildingsFull,
} from '../models/newBuildings';
const API = 'https://crm.metragegroup.com/API/site.php';

export const subscribe = async (form: ISetForm<IEmailData>) => {
  const res = await axios.post<IAPI<ISimpleAnswer>>(API, {
    method: 'site.client.setForm',
    fields: form,
  });
  if (res.statusText === 'OK') {
    return res.data.result;
  }
  return false;
};
export const sendNamePhoneForm = async (form: ISetForm<IFormNamePhoneData>) => {
  const res = await axios.post<IAPI<ISimpleAnswer>>(API, {
    method: 'site.client.setForm',
    fields: form,
  });
  if (res.statusText === 'OK') {
    return res.data.result;
  }
  return false;
};
export const sendLetterCheff = async (form: ISetForm<IFormLetterCheff>) => {
  const res = await axios.post<IAPI<ISimpleAnswer>>(API, {
    method: 'site.client.setForm',
    fields: form,
  });
  if (res.statusText === 'OK') {
    return res.data.result;
  }
  return false;
};
export const takeNewBuilding = async (form: ISetForm<IFormTakeNewBuilding>) => {
  const res = await axios.post<IAPI<ISimpleAnswer>>(API, {
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
export const getObjectFull = async (UID: string, type: string) => {
  const res = await axios.post<IAPI<IObjectsFull>>(API, {
    method: 'site.objects.getFullCard',
    fields: {
      UID: UID,
      typeCard: type,
    },
  });
  if (res.statusText === 'OK') {
    return res.data.result;
  }
  return null;
};
export const sellFilterForm = async (form: ISetForm<IFilterSellFormData>) => {
  const res = await axios.post<IAPI<ISimpleAnswer>>(API, {
    method: 'site.client.setForm',
    fields: form,
  });
  if (res.statusText === 'OK') {
    return res.data.result;
  }
  return false;
};
export const getNewBuildingsFull = async (UID: string) => {
  const res = await axios.post<IAPI<INewBuildingsFull>>(API, {
    method: 'site.newbuildings.getFullCard',
    fields: {
      UID: UID,
    },
  });
  if (res.statusText === 'OK') {
    return res.data.result;
  }
  return null;
};
export const getNewBuildingsAppartment = async (raw: IAppartmentItems) => {
  const res = await axios.post<IAPI<IAppartmentDetail[]>>(API, {
    method: 'site.newbuildings.getAppartments',
    fields: raw,
  });
  if (res.statusText === 'OK') {
    return res.data.result;
  }
  return null;
};
