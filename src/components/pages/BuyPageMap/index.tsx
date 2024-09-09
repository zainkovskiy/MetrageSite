import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { useAppSelector } from '../../../core/hooks/storeHook';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { defultCords } from '../../../core/constants/map';
import Text from '../../ui/Text';
import CenterContainer from '../../containers/CenterContainer';
import PaddingSide from '../../containers/PaddingSide';
import * as S from './style';

const BuyPageMap = () => {
  const { data } = useAppSelector((state) => state.object);
  const { region } = useAppSelector((state) => state.main);
  const defultCenter = defultCords[region];
  const defaultZoom = 12;
  return (
    <S.BuyPageMap>
      <CenterContainer>
        <PaddingSide>
          <Text size={56}>Купить</Text>
        </PaddingSide>
      </CenterContainer>
      <S.BuyPageMapWrap>
        <MapContainer
          center={defultCenter}
          zoom={defaultZoom}
          // scrollWheelZoom={false}
          maxZoom={16}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <MarkerClusterGroup>
            {data?.items &&
              data.items.map((object) => (
                <Marker
                  key={object.UID}
                  position={{
                    lat: object.lat,
                    lng: object.lng,
                  }}
                />
              ))}
          </MarkerClusterGroup>
        </MapContainer>
      </S.BuyPageMapWrap>
    </S.BuyPageMap>
  );
};

export default BuyPageMap;
