import React, { useState, useEffect, useRef } from 'react';
import * as S from './style';
import { InputSelectProps } from './types';
import { inputButtonVariants } from './animate';
import { AnimatePresence } from 'framer-motion';

const Select = (props: InputSelectProps) => {
  const { placeholder, fullWidth, children, value, onChange } = props;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [valueSelect, setValueSelect] = useState(value || '');
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.addEventListener('click', handleListener, true);
    } else {
      document.removeEventListener('click', handleListener, true);
    }
    return () => {
      document.removeEventListener('click', handleListener, true);
    };
  }, [open]);
  useEffect(() => {
    if (onChange) {
      onChange(valueSelect);
    }
  }, [valueSelect]);
  const handleListener = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target === containerRef.current) {
      return;
    }
    setOpen(false);
  };
  const toggleOpen = () => {
    setOpen(!open);
  };
  const handleClick = () => {
    toggleOpen();
  };
  const handleChange = (value: string) => {
    setValueSelect(value);
  };
  const childrenArr = React.Children.toArray(children);

  return (
    <S.InputSelectContainer>
      <S.InputSelect
        onClick={handleClick}
        animate={open ? 'visible' : 'invisible'}
        variants={inputButtonVariants}
        transition={{ duration: 0.3 }}
        ref={containerRef}
      >
        <S.InputSelectText
          readOnly
          value={valueSelect}
          placeholder={placeholder}
        />
        <S.IconArrow />
      </S.InputSelect>
      <AnimatePresence>
        {children && open && (
          <S.InputSelectList
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {React.Children.map(childrenArr, (child) => {
              if (
                child &&
                React.isValidElement(child) &&
                typeof child.type === 'function'
              ) {
                if (child.type.name === 'SelectItem') {
                  return React.cloneElement(child, {
                    onClick: handleChange,
                    ...child.props,
                  });
                }
              }
              return;
            })}
          </S.InputSelectList>
        )}
      </AnimatePresence>
    </S.InputSelectContainer>
  );
};

export default Select;
