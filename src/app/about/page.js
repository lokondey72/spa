import Image from "next/image";
import Link from "next/link";
import MapWithMarker from "@/componants/MapWithMarker";

export default function AboutPage() {
  return (
    <section className="py-28 px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-4xl font-bold text-emerald-700 mb-4">About Us</h2>
          <p className="text-gray-700 mb-4">
            Welcome to <strong>Serenity Touch</strong>, where we believe in the
            healing power of relaxation. Our certified massage therapists
            specialize in techniques that ease tension and promote wellness.
          </p>
          <p className="text-gray-600">
            With a passion for holistic care, we offer a tranquil environment
            designed to help you unwind from everyday stress. Our mission is
            simple: to help you feel better — body, mind, and soul.
          </p>

          <div className="mt-6">
            <a
              href="/services"
              className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-md hover:bg-emerald-700 transition"
            >
              Explore Our Services
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full h-72 md:h-96">
          {/* <GoogleMap /> */}
          {/* <Image
            src="/massage-therapy-img.jpg"
            alt="About Serenity Touch Massage"
            layout="fill"
            objectFit="cover"
            className="rounded-xl shadow-md"
            priority
          /> */}
          <MapWithMarker />
        </div>
      </div>
    </section>
  );
}
