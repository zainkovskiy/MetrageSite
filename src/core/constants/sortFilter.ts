export const sortFilter: ISortFilterRus = {
  default: 'По умолчанию',
  firstCheap: 'Сначала дешевые',
  firstExpensive: 'Сначала дорогие',
  byArea: 'По площади',
  byStreet: 'По улице',
  firstNew: 'Сначала новые',
  firstOld: 'Сначала старые',
};
export const sortFilterList = [
  {
    id: 'default',
    title: 'По умолчанию',
  },
  {
    id: 'firstCheap',
    title: 'Сначала дешевые',
  },
  {
    id: 'firstExpensive',
    title: 'Сначала дорогие',
  },
  {
    id: 'byArea',
    title: 'По площади',
  },
  {
    id: 'byStreet',
    title: 'По улице',
  },
  {
    id: 'firstNew',
    title: 'Сначала новые',
  },
  {
    id: 'firstOld',
    title: 'Сначала старые',
  },
];
interface ISortFilterRus {
  [key: string]: string;
}
