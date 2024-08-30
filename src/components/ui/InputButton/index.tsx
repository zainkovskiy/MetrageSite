import React, { useState, useEffect, useRef } from 'react';
import * as S from './style';
import { InputButtonProps } from './types';
import { inputButtonVariants } from './animate';
import { AnimatePresence } from 'framer-motion';

const InputButton = (props: InputButtonProps) => {
  const { label, fullWidth, children, onClick } = props;
  const containerRef = useRef<HTMLDivElement | null>(null);
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
  const handleListener = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const className = target.className;

    if (!className) {
      setOpen(false);
    }
    if (containerRef.current) {
      const elemColection = containerRef.current.getElementsByClassName(
        `${className}`
      );
      let isMatch = false;
      for (let item of elemColection) {
        if (item === target) {
          isMatch = true;
        }
      }
      if (isMatch) {
        return;
      }
      setOpen(false);
    }
    setOpen(false);
  };
  const toggleOpen = () => {
    setOpen(!open);
  };
  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }
    toggleOpen();
  };
  return (
    <S.InputButtonContainer ref={containerRef}>
      <S.InputButton
        onClick={handleClick}
        animate={open ? 'visible' : 'invisible'}
        variants={inputButtonVariants}
        transition={{ duration: 0.3 }}
      >
        <S.InputText readOnly value={label} />
        <S.IconArrow />
      </S.InputButton>
      <AnimatePresence>
        {children && open && (
          <S.InputButtonList
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </S.InputButtonList>
        )}
      </AnimatePresence>
    </S.InputButtonContainer>
  );
};

export default InputButton;
