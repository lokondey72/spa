import Image from "next/image";
import Banner from "@/componants/Banner";
import ServicesPage from "./services/page";
import AboutPage from "./about/page";
import TimeDuration from "@/componants/TimeDuration";
import HomeServices from "@/componants/HomeServices";

export default function Home() {
  return (
    <main>
      <div>
        <Banner />
        <TimeDuration />
        <HomeServices />
        <ServicesPage />
        <AboutPage />
      </div>
    </main>
  );
}
