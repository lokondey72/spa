import Banner from "@/componants/Banner";
import Image from "next/image";
import ServicesPage from "./services/page";
import AboutPage from "./about/page";
import TimeDuration from "@/componants/TimeDuration";

export default function Home() {
  return (
    <main>
      <div>
        <Banner />
        <TimeDuration />
        <ServicesPage />
        <AboutPage />
      </div>
    </main>
  );
}
