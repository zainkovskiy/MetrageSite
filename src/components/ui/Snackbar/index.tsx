import React from 'react';
import Text from '../Text';
import * as S from './style';
import { AnimatePresence } from 'framer-motion';

const Snackbar = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  setTimeout(() => {
    onClose();
  }, 5000);
  return (
    <AnimatePresence>
      {open && (
        <S.Snackbar
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Text color='white'>Форма успешно отправлена!</Text>
        </S.Snackbar>
      )}
    </AnimatePresence>
  );
};

export default Snackbar;
