"use client";

import Banner from "@/componants/Banner";
import AboutPage from "./about/page";
import TimeDuration from "@/componants/TimeDuration";
import AllServices from "@/componants/AllServices";
import ProductSlider from "../componants/ProductSlider";
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
