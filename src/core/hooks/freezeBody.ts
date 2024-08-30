import React from 'react';

export const useFreezeBody = () => {
  document.body.style.overflow = 'hidden';
};
export const useUnfreezeBody = () => {
  document.body.removeAttribute('style');
};
