import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import banner1 from "../assets/1718373800063.png";
import banner4 from "../assets/sdudh.png";
import banner5 from "../assets/new.png";
import banner6 from "../assets/new2.png";

const Banner = () => {
  return (
    <div>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        <SwiperSlide>
          <div className=" flex flex-col-reverse  md:flex-row w-11/12 mx-auto justify-between items-center py-10 ">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold mt-5 md:mt-28">
                <span>Connect Skilled Freelancers </span>
                <span> With Work Worldwide</span>{" "}
              </h1>
              <p className="text-md md:text-lg my-5 max-w-[500px] text-justify">
                We provide a seamless platform where clients can find verified
                freelancers. Every project is managed with trust, transparency,
                and secure payments. Professionals from diverse skills
                collaborate to deliver high-quality results. Clients can hire
                confidently and track progress in real time. Our mission is to
                make global freelance work reliable and accessible.
              </p>
              <button class="relative flex items-center gap-1 py-2 px-8 md:px-14 border-2 border-orange-500 font-semibold text-[16px] text-orange-500 rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group bg-transparent">
                {/* <!-- Left arrow --> */}
                <svg
                  viewBox="0 0 24 24"
                  class="absolute left-[-25%] w-6 z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-4 group-hover:fill-white"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>

                <span class="relative z-10 -translate-x-3 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-2 group-hover:text-white">
                  Visit Now
                </span>

                <span class="absolute inset-0 m-auto w-[20px] h-[20px] bg-orange-500 rounded-full opacity-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>

                <svg
                  viewBox="0 0 24 24"
                  class="absolute right-4 w-6 fill-orange-500 z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:right-[-25%] group-hover:fill-white"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </button>
            </div>
            <div className="border border-base-300 rounded-xl mt-6 md:mt-0  ">
              <img
                className=" max-w-full md:max-w-[1000px] h-[295px] md:h-[650px]  rounded-xl
                 transform transition-transform duration-500 ease-[cubic-bezier(.23,1,.32,1)] hover:scale-105"
                src={banner1}
              ></img>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" flex flex-col-reverse    md:flex-row w-11/12 mx-auto justify-between items-center py-10 ">
            <div>
              <h1 className=" text-2xl md:text-3xl font-semibold mt-5 md:mt-28 ">
                <span >
                  A Modern Freelance Platform To{" "}
                </span>
                <span>
                  {" "}
                  Hire <br></br> Experts And Grow Businesses
                </span>{" "}
              </h1>
              <p className="text-md md:text-lg my-5  max-w-[500px] text-justify">
                Businesses can easily discover skilled experts for any project
                scale. From startups to enterprises, solutions are tailored to
                meet unique needs. Easy communication tools help maintain smooth
                collaboration. Fast hiring, fair pricing, and quality delivery
                are guaranteed. We help companies evolve by connecting them with
                the right talent.
              </p>
               <button class="relative flex items-center gap-1 py-2 px-8 md:px-14 border-2 border-orange-500 font-semibold text-[16px] text-orange-500 rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group bg-transparent">
                {/* <!-- Left arrow --> */}
                <svg
                  viewBox="0 0 24 24"
                  class="absolute left-[-25%] w-6 z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-4 group-hover:fill-white"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>

                <span class="relative z-10 -translate-x-3 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-2 group-hover:text-white">
                  Visit Now
                </span>

                <span class="absolute inset-0 m-auto w-[20px] h-[20px] bg-orange-500 rounded-full opacity-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>

                <svg
                  viewBox="0 0 24 24"
                  class="absolute right-4 w-6 fill-orange-500 z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:right-[-25%] group-hover:fill-white"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </button>
            </div>
            <div className="border border-base-300 rounded-xl mt-6 md:mt-0  ">
              <img
                className=" max-w-full md:max-w-[1000px] h-[295px] md:h-[650px]  rounded-xl
                 transform transition-transform duration-500 ease-[cubic-bezier(.23,1,.32,1)] hover:scale-105"
                src={banner6}
              ></img>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" flex flex-col-reverse  md:flex-row w-11/12 mx-auto justify-between items-center py-10 ">
            <div>
              <h1 className=" text-2xl md:text-3xl font-semibold mt-5 md:mt-28">
                <span >
                  {" "}
                  Find Top Freelancers, Collaborate{" "}
                </span>{" "}
                <span >
                  {" "}
                  Easily, <br></br>And Complete Projects Safely
                </span>{" "}
              </h1>
              <p className="text-md md:text-lg my-5  max-w-[500px] text-justify">
                Our marketplace ensures a safe environment for work and payment.
                Freelancers showcase portfolios, reviews, and skills
                transparently. Clients can interview, negotiate, and assign
                tasks instantly. Secure escrow payments protect both parties
                from risk. We make freelancing simple, efficient, and worry-free
                for everyone.
              </p>
  <button class="relative flex items-center gap-1 py-2 px-8 md:px-14 border-2 border-orange-500 font-semibold text-[16px] text-orange-500 rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group bg-transparent">
                {/* <!-- Left arrow --> */}
                <svg
                  viewBox="0 0 24 24"
                  class="absolute left-[-25%] w-6 z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-4 group-hover:fill-white"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>

                <span class="relative z-10 -translate-x-3 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-2 group-hover:text-white">
                  Visit Now
                </span>

                <span class="absolute inset-0 m-auto w-[20px] h-[20px] bg-orange-500 rounded-full opacity-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>

                <svg
                  viewBox="0 0 24 24"
                  class="absolute right-4 w-6 fill-orange-500 z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:right-[-25%] group-hover:fill-white"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </button>
            </div>
            <div className="border border-base-300 rounded-xl mt-6 md:mt-0  ">
              <img
                className=" max-w-full md:max-w-[1000px] h-[295px] md:h-[650px]  rounded-xl
                 transform transition-transform duration-500 ease-[cubic-bezier(.23,1,.32,1)] hover:scale-105"
                src={banner5}
              ></img>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" flex flex-col-reverse   md:flex-row w-11/12 mx-auto justify-between items-center py-10 ">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold mt-5 md:mt-28 ">
                <span> Empowering Independent Talents To </span> <br></br>
                <span> Earn, Create, And Work Freely</span>{" "}
              </h1>
              <p className="text-md md:text-lg my-5 max-w-[500px] text-justify">
                We support freelancers who want financial freedom and flexible
                careers. Talented individuals can earn based on skills, not
                location. Tools and resources help freelancers grow
                professionally. Work anytime, anywhere, with control over your
                own schedule. Our platform celebrates creativity, independence,
                and real opportunity.
              </p>
              <button class="relative flex items-center gap-1 py-2 px-8 md:px-14 border-2 border-orange-500 font-semibold text-[16px] text-orange-500 rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group bg-transparent">
                {/* <!-- Left arrow --> */}
                <svg
                  viewBox="0 0 24 24"
                  class="absolute left-[-25%] w-6 z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-4 group-hover:fill-white"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>

                <span class="relative z-10 -translate-x-3 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-2 group-hover:text-white">
                  Visit Now
                </span>

                <span class="absolute inset-0 m-auto w-[20px] h-[20px] bg-orange-500 rounded-full opacity-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>

                <svg
                  viewBox="0 0 24 24"
                  class="absolute right-4 w-6 fill-orange-500 z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:right-[-25%] group-hover:fill-white"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </button>
            </div>
            <div className="border border-base-300 rounded-xl mt-6 md:mt-0  ">
              <img
                className=" max-w-full  md:max-w-[1000px] h-[295px] md:h-[650px]  rounded-xl
                transform transition-transform duration-500 ease-[cubic-bezier(.23,1,.32,1)] hover:scale-105  "
                src={banner4}
              ></img>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
