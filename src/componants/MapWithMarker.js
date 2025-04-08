"use client";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 23.750885, // change to your location
  lng: 90.391015,
};

export default function MapWithMarker() {
  return (
    <div className="mt-10 rounded-xl overflow-hidden shadow-md">
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_API_KEY_HERE">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
