import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Images
import banner1 from "../assets/hero4.png";
import banner4 from "../assets/hero1.jpg";
import banner5 from "../assets/her.jpg";
import banner6 from "../assets/hero3.jpg";

// ✅ Correct import — fix this line
import TextType from "./TextType";

const Banner = () => {
  const slides = [
    {
      img: banner1,
      title: [
        "Mentioning how reliable the marketplace platform, Create a Job"
      ],
    },
    {
      img: banner6,
      title: [
       "Mentioning how reliable the marketplace platform, Create a Job"
      ],
    },
    {
      img: banner5,
      title: [
       "Mentioning how reliable the marketplace platform, Create a Job"
      ],
    },
    {
      img: banner4,
      title: [
      "Mentioning how reliable the marketplace platform, Create a Job"
      ],
    },
  ];

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <img
                src={slide.img}
                alt={`Slide ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay (Dark gradient for text visibility) */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

              {/* Text & Button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-10 z-20">
                <div className="max-w-4xl">
                  <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-8 drop-shadow-2xl">
                    <TextType
                      text={slide.title}
                      typingSpeed={80}
                      deletingSpeed={40}
                      pauseDuration={2000}
                      loop={true}
                      showCursor={true}
                      cursorCharacter="|"
                      textColors={["#fb923c", "#ffffff"]}
                      className="inline-block"
                    />
                  </h1>

                  {/* Button */}
                  <button className="relative inline-flex items-center gap-3 py-2 px-14 md:px-14 border-2 border-orange-500 font-bold text-lg md:text-xl text-orange-400 rounded-full overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group bg-transparent hover:border-orange-400 shadow-2xl">
                    <svg
                      viewBox="0 0 24 24"
                      className="absolute left-[-40%] w-5 z-10 transition-all duration-700 group-hover:left-8 group-hover:fill-white"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                    </svg>

                    <span className="relative z-10 transition-all duration-700 group-hover:text-white group-hover:translate-x-4">
                      Visit Now
                    </span>

                    <span className="absolute inset-0 bg-orange-500 rounded-full scale-0 transition-all duration-700 group-hover:scale-150 opacity-0 group-hover:opacity-100" />

                    <svg
                      viewBox="0 0 24 24"
                      className="absolute right-8 w-5 fill-orange-400 z-10 transition-all duration-700 group-hover:right-[-40%] group-hover:fill-white"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Styling */}
      <style jsx>{`
        .swiper-pagination {
          bottom: 20px !important;
        }
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #fb923c;
          transform: scale(1.4);
          box-shadow: 0 0 12px rgba(251, 146, 60, 0.7);
        }
      `}</style>
    </section>
  );
};

export default Banner;
