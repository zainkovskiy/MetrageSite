import React from 'react';
import * as S from './style';
import { ICheckboxProps } from './type';
import Text from '../Text';
import { ReactComponent as IconCheckbox } from '../../../assets/images/checkbox_icon.svg';
import { v4 as uuidv4 } from 'uuid';
const Checkbox = (props: ICheckboxProps) => {
  const { label, ...otherProps } = props;
  const newId = uuidv4().split('-')[0];
  return (
    <S.Checkbox htmlFor={newId}>
      <S.CheckboxInput type='checkbox' id={newId} {...otherProps} />
      <S.CheckboxCustomInput>
        <IconCheckbox />
      </S.CheckboxCustomInput>
      {label}
    </S.Checkbox>
  );
};

export default Checkbox;
