"use client";

import Banner from "@/src/components/Banner";
import AboutPage from "./about/page";
import TimeDuration from "@/src/components/TimeDuration";
import AllServices from "@/src/components/AllServices";
import ProductSlider from "../components/ProductSlider";
import CounterSection from "./CounterSection";
// import Image from "next/image";
// import ServicesPage from "./services/page";
// import HomeServices from "@/componants/HomeServices";

export default function Home() {
  return (
    <main>
      <div>
        <Banner />
        <TimeDuration />
        {/* <HomeServices /> */}
        <AllServices/>
        <CounterSection/>
        <ProductSlider/>
        <AboutPage />
      </div>
    </main>
  );
}
