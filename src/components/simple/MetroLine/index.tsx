import React from 'react';
import { IMetro } from '../../../core/models/main';
import { ReactComponent as Subway } from '../../../assets/images/subway.svg';
import { ReactComponent as Bus } from '../../../assets/images/bus.svg';
import { ReactComponent as Man } from '../../../assets/images/man.svg';
import { ReactComponent as Auto } from '../../../assets/images/auto.svg';
import Text from '../../ui/Text';
import FlexBox from '../../ui/FlexBox';

const selectIcon: { [key: string]: React.ReactNode } = {
  auto: <Auto />,
  men: <Man />,
  bus: <Bus />,
};

const MetroLine = (props: IMetro) => {
  const { name, distantion, iconDist } = props;
  return (
    <FlexBox gap='0.5rem' aItems='center'>
      <Subway />
      <Text size={16}>{name}</Text>
      {selectIcon[iconDist]}
      <Text size={14} color='greyDark'>
        {distantion}
      </Text>
    </FlexBox>
  );
};

export default MetroLine;
