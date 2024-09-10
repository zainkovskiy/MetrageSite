import React, { useEffect, useMemo, useRef } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { useAppDispatch, useAppSelector } from '../../../core/hooks/storeHook';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { defultCords } from '../../../core/constants/map';
import Text from '../../ui/Text';
import CenterContainer from '../../containers/CenterContainer';
import PaddingSide from '../../containers/PaddingSide';
import * as S from './style';
import { LatLngBounds } from 'leaflet';
import { setBBox } from '../../../core/store/slices/objectsSlice';

const ObjectMapPage = () => {
  const { region } = useAppSelector((state) => state.main);
  const defultCenter = defultCords[region];
  const defaultZoom = 12;
  return (
    <S.ObjectMapPage>
      <CenterContainer>
        <PaddingSide>
          <Text size={56}>Купить</Text>
        </PaddingSide>
      </CenterContainer>
      <S.ObjectMapPageWrap>
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
          {/* <MarkerClusterGroup>
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
          </MarkerClusterGroup> */}
          <MarkerClusterGroup>
            <MapControl />
          </MarkerClusterGroup>
        </MapContainer>
      </S.ObjectMapPageWrap>
    </S.ObjectMapPage>
  );
};
const MapControl = () => {
  const { data, bBox } = useAppSelector((state) => state.object);
  const firstMount = useRef(true);
  const dispatch = useAppDispatch();
  useEffect(() => {
    setNewBound(map.getBounds());
  }, []);
  const setNewBound = (latlng: LatLngBounds) => {
    const bounds = JSON.parse(JSON.stringify(latlng));
    if (JSON.stringify(bBox) === JSON.stringify(bounds)) {
      return;
    }
    dispatch(setBBox(bounds));
  };

  const map = useMapEvents({
    moveend() {
      setNewBound(map.getBounds());
    },
  });
  return (
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
  );
};
export default ObjectMapPage;
