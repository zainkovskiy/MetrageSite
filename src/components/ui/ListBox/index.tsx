import React, { cloneElement, useEffect } from 'react';
import { IListBoxProps } from './type';
import * as S from './style';
import { v4 as uuidv4 } from 'uuid';
const ListBox = (props: IListBoxProps) => {
  const {
    title,
    iconStart,
    iconEnd,
    arrow,
    isHover = false,
    open = false,
    children,
    onClick,
  } = props;
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

  const newId = uuidv4().split('-')[0];
  const handleListener = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target?.dataset?.name !== `list_box_${newId}`) {
      if (open && onClick) {
        onClick();
      }
    }
  };
  const setElementId = (elem: React.ReactNode, isIcon?: string) => {
    if (elem && React.isValidElement(elem)) {
      return React.cloneElement(elem, {
        'data-name': `list_box_${newId}`,
        id: isIcon === 'icon' ? 'icon' : elem.props?.id,
        ...elem.props,
      });
    }
    return;
  };
  const childrenWithId = React.Children.map(
    React.Children.toArray(children),
    (child) => {
      return setElementId(child);
    }
  );
  return (
    <S.ListBox
      $isHover={isHover}
      onClick={onClick}
      data-name={`list_box_${newId}`}
    >
      {iconStart && setElementId(iconStart, 'icon')}
      {title}
      {iconEnd && setElementId(iconEnd, 'icon')}
      {arrow && (
        <S.IconArrow $isActive={open} data-name={`list_box_${newId}`} />
      )}
      {open && (
        <S.ListBoxContainer data-name={`list_box_${newId}`}>
          {childrenWithId}
        </S.ListBoxContainer>
      )}
    </S.ListBox>
  );
};
export default ListBox;
