import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const MyMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
  });

  return isLoaded ? (
    <GoogleMap
      zoom={15}
      options={{}}
      mapContainerStyle={{
        width: '100%',
        height: '100%',
      }}
      center={{
        lat: -23.3221,
        lng: -51.19181,
      }}
    >
      <Marker
        clickable
        position={{
          lat: -23.3221,
          lng: -51.19181,
        }}
      />
    </GoogleMap>
  ) : (
    <div>Não foi possível carregar o Mapa</div>
  );
};

export default MyMap;
