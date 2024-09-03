import React, { useEffect, useState } from 'react';
import * as S from './style';
import { IInputProps } from './type';
import { AnimatePresence } from 'framer-motion';

const InputSearch = (props: IInputProps) => {
  const { fullWidth, small, onChange, list, placeholder } = props;
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);
    setOpen(true);
    if (onChange) {
      onChange(newValue);
    }
  };
  const handleBlur = () => {
    setOpen(false);
  };
  return (
    <S.InputContainer $fullWidth={fullWidth}>
      <S.Input
        type='text'
        $fullWidth={fullWidth}
        $small={small}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
      />
      <AnimatePresence>
        {open && (
          <S.InputButtonList
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {list}
          </S.InputButtonList>
        )}
      </AnimatePresence>
    </S.InputContainer>
  );
};

export default InputSearch;
