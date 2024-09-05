import React from 'react';
import { ITooltipProps } from './types';
import * as S from './style';
import { hoverTextLeft, hoverTextRight } from './anumate';
const Tooltip = (props: ITooltipProps) => {
  const {
    title,
    children,
    flex = false,
    maxWidth = false,
    position = 'left',
  } = props;
  return (
    <S.TooltipUISttyle
      initial='initial'
      animate='initial'
      whileHover='animate'
      $flex={flex}
    >
      <S.TooltipTitleStyle
        $maxWidth={maxWidth}
        variants={position === 'left' ? hoverTextLeft : hoverTextRight}
        transition={{
          duration: 0.3,
        }}
      >
        {title}
      </S.TooltipTitleStyle>
      {children}
    </S.TooltipUISttyle>
  );
};
export default Tooltip;
