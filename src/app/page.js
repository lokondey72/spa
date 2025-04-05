import Banner from "@/componants/Banner";
import Image from "next/image";
import ServicesPage from "./services/page";
import AboutPage from "./about/page";

export default function Home() {
  return (
    <main>
      <div>
        <Banner />
        <ServicesPage />
        <AboutPage />
      </div>
    </main>
  );
}
