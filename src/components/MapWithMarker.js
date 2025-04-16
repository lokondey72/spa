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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.776952568653!2d90.4093734747932!3d23.7904067872403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70a7194cabd%3A0x61120096397c71ac!2sHouse%23%207%2FA%20Road%20No.%2041%2C%20Dhaka%201212!5e1!3m2!1sen!2sbd!4v1744828005214!5m2!1sen!2sbd"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
