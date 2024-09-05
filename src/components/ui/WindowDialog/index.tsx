import React, { useEffect } from 'react';
import * as S from './style';
import { IWindowDialogProps } from './types';
import { useFreezeBody, useUnfreezeBody } from '../../../core/hooks/freezeBody';
import { AnimatePresence } from 'framer-motion';
const WindowDialog = ({ open, children }: IWindowDialogProps) => {
  useEffect(() => {
    if (open) {
      useFreezeBody();
    }
    return () => {
      useUnfreezeBody();
    };
  }, [open]);
  return (
    <AnimatePresence>
      {open && (
        <S.WindowDialog
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </S.WindowDialog>
      )}
    </AnimatePresence>
  );
};

export default WindowDialog;
