"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  };

  const slides = [
    { id: 1, image: "/massage-therapy-img.jpg", alt: "Slide 1" },
    { id: 2, image: "/spa-massage_img.jpg", alt: "Slide 2" },
    { id: 3, image: "/massage-therapy-img.jpg", alt: "Slide 3" },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 pt-20">
      <div className="overflow-hidden shadow-lg">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id}>
              <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px]">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
