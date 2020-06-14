import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';


const libraries = ['places'];
const mapContainerStyle = {
  width: '100%',
  height: '100%',
};
const center = {
  lat: -23.3221,
  lng: -51.19181,
};

const MyMap = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.GATSBY_GOOGLE_KEY,
    libraries,
  });

  if (loadError) return <span>Error loading maps</span>;
  if (!isLoaded) return <span>Loading Maps</span>;

  return isLoaded ? (
    <GoogleMap
      zoom={15}
      mapContainerStyle={mapContainerStyle}
      center={center}
    >
      <Marker
        clickable
        position={center}
      />
    </GoogleMap>
  ) : (
    <div>Não foi possível carregar o Mapa</div>
  );
};

export default MyMap;
