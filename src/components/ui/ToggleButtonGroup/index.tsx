import React, { Children, useEffect, useRef, useState } from 'react';
import * as S from './style';
import { IToggleButtonGroupProps } from './type';
import { IToggleButtonProps } from '../ToggleButton/type';

const getValue = (value: string | string[] | undefined, multiple: boolean) => {
  if (multiple) {
    if (Array.isArray(value)) {
      return value;
    }
    if (typeof value === 'string') {
      return [value];
    }
    return [];
  }
  if (typeof value === 'string') {
    return value;
  }
  return '';
};

const ToggleButtonGroup = (props: IToggleButtonGroupProps) => {
  const firstMount = useRef(true);
  const { children, onChange, multiple = false, value, wrap } = props;
  const [valueState, setValueState] = useState<string | string[]>(
    getValue(value, multiple)
  );
  useEffect(() => {
    if (firstMount.current) {
      firstMount.current = false;
      return;
    }
    onChange(valueState);
  }, [valueState]);
  const childsArr = Children.toArray(children);
  const handleChangeButton: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    const newValue = e.target.value;
    if (multiple) {
      setMultipleValue(newValue);
      return;
    }
    setSingleValue(newValue);
  };
  const setMultipleValue = (newValue: string) => {
    if (!Array.isArray(valueState)) {
      return;
    }
    if (valueState?.includes(newValue)) {
      setValueState(valueState.filter((item) => item !== newValue));
      return;
    }
    setValueState((prevState) => {
      return [...prevState, newValue];
    });
  };
  const setSingleValue = (newValue: string) => {
    if (valueState === newValue) {
      setValueState('');
      return;
    }
    setValueState(newValue);
  };
  return (
    <S.ToggleButtonGroup $wrap={wrap}>
      {Children.map(childsArr, (child) => {
        if (React.isValidElement(child) && typeof child.type === 'function') {
          if (child.type.name === 'ToggleButton') {
            return React.cloneElement(
              child as React.ReactElement<IToggleButtonProps>,
              {
                ...child.props,
                checked: multiple
                  ? valueState.includes(child.props.value)
                  : valueState === child.props.value,
                onChange: handleChangeButton,
              }
            );
          }
        }
      })}
    </S.ToggleButtonGroup>
  );
};

export default ToggleButtonGroup;
