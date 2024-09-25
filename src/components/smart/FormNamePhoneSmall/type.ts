import { ISetForm } from '../../../core/models/api';
import { IFormNamePhoneData } from '../../../core/models/main';

export interface IFormNamePhoneSmallProps {
  text: string;
  buttonText?: string;
  back?: boolean;
  name?: boolean;
  fontSize?: number;
  onSubmitRaw?: (raw: ISetForm<IFormNamePhoneData>) => void;
}
