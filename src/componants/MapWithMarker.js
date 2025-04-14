"use client";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Link from "next/link";

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
      {/* <LoadScript googleMapsApiKey="YOUR_GOOGLE_API_KEY_HERE">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript> */}
      {/* <Link
        href='/<iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20280.361015563434!2d90.36209487605306!3d23.987913185592582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755dd007a6f09db%3A0x95bedfb1189a3799!2sChowrasta!5e1!3m2!1sen!2sbd!4v1744631626803!5m2!1sen!2sbd"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>'
      >
      </Link> */}

      <div className="w-full h-[350px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.8283626973734!2d90.41244737479313!3d23.788380487318246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a04b869b05%3A0x4e1c924c9547f134!2s101%20Rd%2037%2C%20Dhaka%201212!5e1!3m2!1sen!2sbd!4v1744638042948!5m2!1sen!2sbd"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
