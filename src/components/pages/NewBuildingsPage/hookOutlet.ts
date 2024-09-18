import { useOutletContext } from 'react-router-dom';
import { ContextOtletType } from './type';

export const useBuildingOutletProps = () => {
  return useOutletContext<ContextOtletType>();
};
