import React from 'react';
import { ITabPanelProps } from './types';

const TabsPanel = (props: ITabPanelProps) => {
  const { value, activeKey, children } = props;
  return <>{value === activeKey && <div>{children}</div>}</>;
};

export default TabsPanel;
