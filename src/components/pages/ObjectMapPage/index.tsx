import React, { ForwardRefExoticComponent, useEffect, useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  MarkerProps,
  Popup,
} from 'react-leaflet';
import { useAppDispatch, useAppSelector } from '../../../core/hooks/storeHook';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { defultCords } from '../../../core/constants/map';
import Text from '../../ui/Text';
import CenterContainer from '../../containers/CenterContainer';
import PaddingSide from '../../containers/PaddingSide';
import * as S from './style';
import { LatLngBounds } from 'leaflet';
import { setBBox } from '../../../core/store/slices/objectsSlice';
import ObjectPopup from '../../simple/ObjectPopup';
import { useLocation } from 'react-router-dom';

const ObjectMapPage = () => {
  const { region } = useAppSelector((state) => state.main);
  const defultCenter = defultCords[region];
  const defaultZoom = 12;
  const location = useLocation();
  const buyRegExp = new RegExp('buy', 'i');
  const isBuy = buyRegExp.test(location.pathname);
  return (
    <S.ObjectMapPage>
      <CenterContainer>
        <PaddingSide>
          <Text sizeStr='clamp(32px, 5vw, 56px)'>
            {isBuy ? 'Купить' : 'Снять'}
          </Text>
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
          <MapControl />
        </MapContainer>
      </S.ObjectMapPageWrap>
    </S.ObjectMapPage>
  );
};
const MapControl = () => {
  const dispatch = useAppDispatch();
  const { data, bBox } = useAppSelector((state) => state.object);
  // TODO: по возможности убрать any
  const [layers, setLayers] = useState<any>([]);
  useEffect(() => {
    if (data?.items && data?.items.length > 0) {
      setLayers(
        data.items.map((item) => (
          <Marker
            key={item.UID}
            position={{
              lat: item.lat,
              lng: item.lng,
            }}
          >
            <Popup>
              <ObjectPopup {...item} />
            </Popup>
          </Marker>
        ))
      );
      return;
    }
    setLayers([]);
  }, [data]);

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
    <>
      {data?.items && (
        <MarkerClusterGroup>
          {layers}
          {/* {data.items.map((object) => (
            <Marker
              key={object.UID}
              position={{
                lat: object.lat,
                lng: object.lng,
              }}
            />
          ))} */}
        </MarkerClusterGroup>
      )}
    </>
  );
};
export default ObjectMapPage;
