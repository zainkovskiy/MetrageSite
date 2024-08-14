import React from 'react';
import * as S from './style';
import { ITabsProps } from './types';
import { ITabProps } from '../Tab/types';

const Tabs = (props: ITabsProps) => {
  const { value, children, onChange } = props;
  const childArr = React.Children.toArray(children);
  return (
    <S.Tabs>
      {React.Children.map(childArr, (child) => {
        if (React.isValidElement<ITabProps>(child)) {
          return React.cloneElement(child, {
            isMatch: value === child.props.activeKey,
            onChange: onChange,
          });
        }
      })}
    </S.Tabs>
  );
};

export default Tabs;
