export interface IPaginationProps {
  count: number;
  page?: number;
  onChange?: (page: number) => void;
}
