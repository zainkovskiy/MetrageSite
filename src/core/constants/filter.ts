export const defaultFilter = {
  typeEstate: 'live',
  subTypeEstate: '',
  roomsCount: [],
  isStudio: false,
  priceFrom: null,
  priceTo: null,
  priceType: '',
  areaFrom: null,
  areaTo: null,
  address: undefined,
};

export const filterTypeBusiness = [
  {
    label: 'Офис',
    value: 'office',
  },
  {
    label: 'Торговая площадь',
    value: 'shoppingArea',
  },
  {
    label: 'Склад',
    value: 'warehouse',
  },
  {
    label: 'Пом. свободного назначения',
    value: 'freeAppointmentObject',
  },
  {
    label: 'Производство',
    value: 'industry',
  },
  {
    label: 'Здание',
    value: 'building',
  },
  {
    label: 'Готовый бизнес',
    value: 'business',
  },
  {
    label: 'Коммерческая земля',
    value: 'commercialLand',
  },
];
export const filterTypeBusinessRent = [
  {
    label: 'Офис',
    value: 'office',
  },
  {
    label: 'Склад',
    value: 'warehouse',
  },
  {
    label: 'Пом. свободного назначения',
    value: 'freeAppointmentObject',
  },
  {
    label: 'Производство',
    value: 'industry',
  },
  {
    label: 'Здание',
    value: 'building',
  },
];
export const filterTypeLive = [
  {
    label: 'Дом, дача',
    value: 'house',
  },
  {
    label: 'Часть дома',
    value: 'houseShare',
  },
  {
    label: 'Таунхаус',
    value: 'townhouse',
  },
  {
    label: 'Участок',
    value: 'land',
  },
];
export const filterTypeTranslate: { [key: string]: string } = {
  newBuildingFlat: 'Квартира в новостройке',
  flat: 'Квартира во вторичке',
  room: 'Комната',
  house: 'Дом, дача',
  houseShare: 'Часть дома',
  townhouse: 'Таунхаус',
  land: 'Участок',
  garage: 'Гараж',
  office: 'Офис',
  shoppingArea: 'Торговая площадь',
  warehouse: 'Склад',
  freeAppointmentObject: 'Пом. свободного назначения',
  industry: 'Производство',
  building: 'Здание',
  business: 'Готовый бизнес',
  commercialLand: 'Коммерческая земля',
};
