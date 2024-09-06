import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { IMapOneObjectProps } from './type';

const MapOneObject = ({ lat, lng }: IMapOneObjectProps) => {
  const defultCenter = {
    lat: lat,
    lng: lng,
  };
  const defaultZoom = 16;
  return (
    <div style={{ width: '100%', height: '480px', position: 'relative' }}>
      <MapContainer
        center={defultCenter}
        zoom={defaultZoom}
        scrollWheelZoom={false}
        maxZoom={16}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={defultCenter} />
      </MapContainer>
    </div>
  );
};

export default MapOneObject;
