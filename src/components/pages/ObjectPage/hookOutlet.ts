import { useOutletContext } from 'react-router-dom';
import { ContextOtletType } from './type';

export const useObjectOutletProps = () => {
  return useOutletContext<ContextOtletType>();
};
