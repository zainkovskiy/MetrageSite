export const useNumberTriad = (number: number | string) => {
  return number.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
};
