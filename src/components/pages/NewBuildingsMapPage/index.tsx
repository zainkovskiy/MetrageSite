import React, { useEffect, useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  Popup,
} from 'react-leaflet';
import { useAppDispatch, useAppSelector } from '../../../core/hooks/storeHook';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { defultCords } from '../../../core/constants/map';
import * as S from './style';
import { LatLngBounds } from 'leaflet';
import NewBuildingsPopup from '../../simple/NewBuildingsPopup ';
import { setBBoxBuild } from '../../../core/store/slices/newBuildingsSlice';

const NewBuildingsMapPage = () => {
  const { region } = useAppSelector((state) => state.main);
  const defultCenter = defultCords[region];
  const defaultZoom = 12;
  return (
    <S.NewBuildingsMapPage>
      <MapContainer center={defultCenter} zoom={defaultZoom} maxZoom={16}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <MapControl />
      </MapContainer>
    </S.NewBuildingsMapPage>
  );
};
const MapControl = () => {
  const dispatch = useAppDispatch();
  const { data, bBox } = useAppSelector((state) => state.newbuildings);

  // TODO: по возможности убрать any
  const [layers, setLayers] = useState<any>([]);
  useEffect(() => {
    if (data?.items && data?.items.length > 0) {
      setLayers(
        data.items.map((item) => (
          <Marker key={item.UID} position={item.centroid}>
            <Popup>
              <NewBuildingsPopup {...item} />
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
    dispatch(setBBoxBuild(bounds));
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
export default NewBuildingsMapPage;
