import React, { cloneElement, useEffect } from 'react';
import { IListBoxProps } from './type';
import * as S from './style';
import { v4 as uuidv4 } from 'uuid';
import { IListBoxItemOwnProps } from '../ListBoxItem/type';
const ListBox = (props: IListBoxProps) => {
  const {
    title,
    iconStart,
    iconEnd,
    arrow,
    isHover = false,
    open = false,
    children,
    size,
    padding,
    hightlight,
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
  const setElementId = (elem: React.ReactNode) => {
    if (elem && React.isValidElement(elem) && typeof elem.type === 'function') {
      if (elem.type.name === 'ListBoxItem') {
        return React.cloneElement(elem, {
          'data-name': `list_box_${newId}`,
          isActive: hightlight === elem.props.id,
          size: size,
          ...elem.props,
        });
      }

      return React.cloneElement(elem, {
        'data-name': `list_box_${newId}`,
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
      $size={size}
      onClick={onClick}
      data-name={`list_box_${newId}`}
    >
      {iconStart && setElementId(iconStart)}
      {title}
      {iconEnd && setElementId(iconEnd)}
      {arrow && (
        <S.IconArrow
          $isActive={open}
          data-name={`list_box_${newId}`}
          data-arrow='arrow'
        />
      )}
      {open && (
        <S.ListBoxContainer data-name={`list_box_${newId}`} $padding={padding}>
          {childrenWithId}
        </S.ListBoxContainer>
      )}
    </S.ListBox>
  );
};
export default ListBox;
