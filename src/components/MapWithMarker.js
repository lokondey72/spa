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
      <div className="w-full h-[350px]">
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6606.009857667805!2d90.4155186!3d23.7835557!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c133458d5c2f%3A0xd55e5a0e760dad46!2sEuropean%20Spa!5e1!3m2!1sen!2sbd!4v1754847454749!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6606.009857667805!2d90.4155186!3d23.7835557!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c133458d5c2f%3A0xd55e5a0e760dad46!2sEuropean%20Spa!5e1!3m2!1sen!2sbd!4v1754847454749!5m2!1sen!2sbd"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
