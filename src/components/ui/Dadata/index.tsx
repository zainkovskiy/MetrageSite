import React, { forwardRef, useRef } from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import Input from '../Input';
import Text from '../Text';
import ButtonLink from '../ButtonLink';
import { DadataProps } from './type';

const Dadata = (props: DadataProps) => {
  const { value, onChange } = props;
  return (
    <AddressSuggestions
      token='408e6651c0b9bfc8e2f487383d45353973f3285c'
      customInput={Input}
      filterFromBound='region'
      filterToBound='house'
      // filterLocations={[{ region: 'Новосибирская' }, { region: 'Московская' }]}
      value={value}
      onChange={onChange}
      inputProps={{
        placeholder: 'Улица',
      }}
      renderOption={(suggestion) => {
        return <ButtonLink size={16} label={suggestion.value} />;
      }}
      hintText={
        <Text size={18} bold>
          Результаты поиска
        </Text>
      }
    />
  );
};

export default Dadata;
