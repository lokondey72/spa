// // components/GoogleMap.js

// import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';

// const containerStyle = {
//   width: '100%',
//   height: '500px',
// };

// const center = {
//   lat: 40.748817, // Latitude of the center (e.g., New York City)
//   lng: -73.985428, // Longitude of the center
// };

// export default function MapComponent() {
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY', // Replace with your API key
//   });

//   if (loadError) {
//     return <div>Error loading maps</div>;
//   }

//   if (!isLoaded) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={center}
//       zoom={14}
//     >
//       {/* Marker */}
//       <Marker position={center} />
//     </GoogleMap>
//   );
// }
