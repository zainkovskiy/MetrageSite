import React, { useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { IContactMap } from './type';
import { useAppSelector } from '../../../core/hooks/storeHook';
import { defultCords } from '../../../core/constants/map';
import { IContactsOffice } from '../../../core/models/contacts';
import { Map } from 'leaflet';
import * as S from './style';
import ContactsOffice from '../ContactsOffice';
import ContactsOfficeFull from '../ContactsOfficeFull';

const ContactsMap = (props: IContactMap) => {
  const { region } = useAppSelector((state) => state.main);
  const { center, offices } = props;
  const mapRef = useRef<Map>(null);
  const [curOffice, setCurOffice] = useState<IContactsOffice | null>(null);
  const defultCenter = center || defultCords[region];
  const defaultZoom = 11;
  const handleClickCurOffice = (office: IContactsOffice) => {
    setCurOffice(office);
    if (mapRef.current) {
      mapRef.current.setView(office.centroid, 16);
    }
  };
  const cleareCurOffice = () => {
    setCurOffice(null);
  };
  return (
    <S.ContactsMap>
      <MapContainer
        center={defultCenter}
        zoom={defaultZoom}
        maxZoom={16}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <MarkerClusterGroup>
          {offices.map((office) => (
            <Marker
              key={office.UID}
              position={office.centroid}
              eventHandlers={{ click: () => handleClickCurOffice(office) }}
            />
          ))}
        </MarkerClusterGroup>
      </MapContainer>
      <S.ContactsMapListWrap>
        {curOffice ? (
          <ContactsOfficeFull office={curOffice} onClick={cleareCurOffice} />
        ) : (
          <S.ContactsMapList>
            {offices.map((office) => (
              <ContactsOffice
                key={office.UID}
                office={office}
                onClick={handleClickCurOffice}
              />
            ))}
          </S.ContactsMapList>
        )}
      </S.ContactsMapListWrap>
    </S.ContactsMap>
  );
};

export default ContactsMap;
