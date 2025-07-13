"use client";

import Banner from "@/src/components/Banner";
import AboutPage from "./about/page";
import TimeDuration from "@/src/components/TimeDuration";
import AllServices from "@/src/components/AllServices";
import ProductSlider from "../components/ProductSlider";
import VipLounge from "../components/VipLounge";
import CounterSection from "./CounterSection";
// import { useSearchParams } from "next/navigation";
// import { useEffect } from "react";
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
        <VipLounge/>
        <ProductSlider/>
        <AboutPage />
      </div>
    </main>
  );
}
