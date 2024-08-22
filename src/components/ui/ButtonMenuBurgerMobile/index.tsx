import React from 'react';
import PathBurger from '../PathBurget';

const ButtonMenuBurgerMobile = () => {
  return (
    <svg viewBox='0 0 24 24' height={24} widths={24}>
      <PathBurger
        color='black'
        variants={{
          closed: { d: 'M 4 6.5 L 20 6.5' },
          open: { d: 'M 6 18 L 18 6' },
        }}
      />
      <PathBurger
        color='black'
        variants={{
          closed: { opacity: 1, d: 'M 4 12.5 L 20 12.5' },
          open: { opacity: 0 },
        }}
      />
      <PathBurger
        color='black'
        variants={{
          closed: { d: 'M 4 18.5 L 20 18.5' },
          open: { d: 'M 6 6 L 18 18' },
        }}
      />
    </svg>
  );
};

export default ButtonMenuBurgerMobile;
