import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../core/hooks/storeHook';
import {
  getContacts,
  setIndex,
} from '../../../core/store/slices/contactsSlice';
import CenterContainer from '../../containers/CenterContainer';
import PaddingSide from '../../containers/PaddingSide';
import * as S from './style';
import Text from '../../ui/Text';
import ToggleButton from '../../ui/ToggleButton';
import ToggleButtonGroup from '../../ui/ToggleButtonGroup';
import ContactsMap from '../../smart/ContactsMap';

const СontactsPage = () => {
  const dispatch = useAppDispatch();
  const { data, loading, index } = useAppSelector((state) => state.contacts);
  console.log(data);

  useEffect(() => {
    if (data) {
      return;
    }
    getAllOffices();
  }, []);
  const getAllOffices = () => {
    dispatch(getContacts());
  };
  if (loading) {
    return <span>loading...</span>;
  }
  const setNewIndex = (newIndex: number) => {
    dispatch(setIndex(newIndex));
  };
  return (
    <CenterContainer>
      <PaddingSide>
        <S.ContactsPage>
          <Text sizeStr='clamp(32px, 5vw, 56px)'>Контакты</Text>
          <ToggleButtonGroup
            onChange={(value) => {
              typeof value === 'string' && setNewIndex(parseInt(value));
            }}
            value={index?.toString() || ''}
          >
            {data?.map((cluster, index) => (
              <ToggleButton
                key={cluster.UID}
                value={index.toString()}
                label={cluster.clusterName}
              />
            ))}
          </ToggleButtonGroup>
          <ContactsMap
            center={(data && data[index].centroid) || null}
            offices={(data && data[index].offices) || []}
            key={data && data[index].UID}
          />
        </S.ContactsPage>
      </PaddingSide>
    </CenterContainer>
  );
};

export default СontactsPage;
