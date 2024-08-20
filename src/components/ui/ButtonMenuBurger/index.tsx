import React from 'react';
import PathBurger from '../PathBurget';

const ButtonMenuBurger = () => {
  return (
    <svg viewBox='0 0 24 24' height={24} widths={24}>
      <PathBurger
        variants={{
          closed: { d: 'M 0 8.5 L 24 8.5' },
          open: { d: 'M 4.5 22 L 22 4.5' },
        }}
      />
      <PathBurger
        variants={{
          closed: { d: 'M 0 14.5 L 24 14.5' },
          open: { d: 'M 4.5 4.5 L 22 22' },
        }}
      />
    </svg>
  );
};

export default ButtonMenuBurger;
