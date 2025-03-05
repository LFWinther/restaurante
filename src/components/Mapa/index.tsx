import React from 'react';
import styles from './Mapa.module.scss';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import stylesTema from 'styles/Tema.module.scss';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -22.2410868,  // Altere para a latitude do restaurante-22.2410868,-42.5496427,1028m
  lng: -42.5496427,  // Altere para a longitude do restaurante
};

const Mapa: React.FC = () => {
  return (
    <div className={styles.mapa} >
      <LoadScript googleMapsApiKey="AIzaSyD46Tg42Rfdew5WpAQBqcDEw0CdmUfqZUI">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={16}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Mapa;
