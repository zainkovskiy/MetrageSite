import { DaDataAddress, DaDataSuggestion } from 'react-dadata';

export interface DadataProps {
  value?: DaDataSuggestion<DaDataAddress> | undefined;
  onChange?: (suggestion?: DaDataSuggestion<DaDataAddress>) => void;
}
