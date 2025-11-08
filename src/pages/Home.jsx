import React, { useEffect } from "react";
import Banner from "../components/Banner";
import { HiOutlineUsers } from "react-icons/hi";
import { FaRegHandshake } from "react-icons/fa6";
import { HiOutlineCreditCard } from "react-icons/hi";
import { HiOutlineSupport } from "react-icons/hi";
import news from "../assets/h21.png";
import news2 from "../assets/h22.png";
import news3 from "../assets/h23.png";
import AOS from "aos";
import "aos/dist/aos.css";
import blog1 from "../assets/blog-1.jpg";
import blog2 from "../assets/blog-2.jpg";
import blog3 from "../assets/blog-3.jpg";
import blog4 from "../assets/blog-4.jpg";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

import company from "../assets/1.png";
import company2 from "../assets/2.png";
import company3 from "../assets/3.png";
import company4 from "../assets/4.png";
import company5 from "../assets/5.png";
import company6 from "../assets/6.png";

import pic1 from "../assets/man2.png";
import pic2 from "../assets/man3.png";
import pic3 from "../assets/women1.png";
import pic4 from "../assets/women1.png";
import pic5 from "../assets/women2.png";
import pic6 from "../assets/women4.png";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>

      <section className="w-11/12 mx-auto mt-35 mb-35">
        <div>
          <h1 className="text-3xl font-semibold text-center ">
            Need something done?
          </h1>
          <p className="text-lg text-center mt-2 mb-15">
            Most viewed and all-time top-selling services
          </p>
          <div className=" grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4">
            <div
              data-aos="fade-up"
              className="border px-3 border-base-300 rounded-lg flex flex-col text-center py-7 
                    transition-all duration-300 hover:bg-base-200 group"
            >
              <div className="group-hover:animate-bounce">
                {" "}
                <HiOutlineUsers className="w-11 h-8 mx-auto text-green-600" />
              </div>

              <h2 className="text-lg font-medium mt-3">Post a job</h2>
              <p className="text-gray-800 text-md">
                Write your project details clearly and attract the right talent
                instantly.
              </p>
            </div>

            <div
              data-aos="fade-up"
              className="border px-3 border-base-300 rounded-lg flex flex-col text-center py-7 
                    transition-all duration-300 hover:bg-base-200 group"
            >
              <div className="group-hover:animate-bounce">
                
                <FaRegHandshake className="w-11 h-8 mx-auto  text-green-600"></FaRegHandshake>
              </div>
              <h2 className="text-lg font-medium">Choose freelancers</h2>
              <p className="text-gray-800 text-md">
                Browse verified profiles, compare experience, and select the
                best fit for your work.
              </p>
            </div>

            <div
              data-aos="fade-up"
              className="border px-3 border-base-300 rounded-lg flex flex-col text-center py-7 
                    transition-all duration-300 hover:bg-base-200 group"
            >
              <div className="group-hover:animate-bounce">
                <HiOutlineCreditCard className="w-11 h-8 mx-auto text-green-600"></HiOutlineCreditCard>
              </div>
              <h2 className="text-lg font-medium">Pay safely</h2>
              <p className="text-gray-800 text-md">
                All payments are protected with secure escrow, released only
                when you're satisfied.
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="border px-3 border-base-300 rounded-lg flex flex-col text-center py-7 
                    transition-all duration-300 hover:bg-base-200 group"
            >
              <div className="group-hover:animate-bounce">
                <HiOutlineSupport className="w-11 h-8 mx-auto text-green-600"></HiOutlineSupport>
              </div>
              <h2 className="text-lg font-medium">We’re here to help</h2>
              <p className="text-gray-800 text-md">
                Our support team is available anytime to guide you, answer
                questions, and assist.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-35 w-11/12   lg:w-8/12 mx-auto">
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-20 justify-between">
          <div className=" flex flex-col justify-center  space-y-3">
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-lg font-semibold"
            >
              <h1 className="text-3xl font-semibold space-y-1  ">
                Experience a quicker, simpler, and
                <br></br>
                <span className="mt-1"> more effective job search</span>
              </h1>
            </motion.p>

            {/* Slide in from right */}
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-lg font-semibold"
            >
              <p className="text-lg  ">
                Our platform offers intuitive tools, personalized job
                recommendations, and valuable resources to streamline your job
                search process.
              </p>
            </motion.p>

            <div className="mt-3 text-xs">
              <p className="text-lg  ">
                Easily browse job listings with smart search and filters
              </p>
              <p className="text-lg  ">
                Receive personalized job suggestions based on your preferences.
              </p>
              <p className="text-lg  ">
                Access resources to improve your resume, ace interviews, and
                advance your career.{" "}
              </p>
            </div>
            <button class="relative mt-4 w-[170px] flex items-center gap-1 py-1 px-9 border-[4px] border-transparent font-semibold text-[16px] text-green-400 rounded-xl shadow-[0_0_0_2px_rgba(132,255,0,1)] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] group bg-transparent">
              <svg
                viewBox="0 0 24 24"
                class="arr-2 absolute left-[-25%] w-6 fill-green-400 z-[9] transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-4 group-hover:fill-[#212121]"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>

              <span class="relative z-[1] translate-x-[-12px] transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-3 group-hover:text-[#212121]">
                Visite Now
              </span>

              <span class="circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20px] h-[20px] bg-green-400 rounded-full opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>

              <svg
                viewBox="0 0 24 24"
                class="arr-1 absolute right-4 w-6 fill-green-400 z-[9] transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:right-[-25%] group-hover:fill-[#212121]"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </div>

          <div data-aos="fade-up" className="relative w-full max-w-lg mx-auto">
            <img
              src={news}
              alt="News main"
              className="w-full h-auto rounded-lg"
            />

            <img
              src={news2}
              alt="News secondary"
              className="absolute right-0 top-19 border bg-white border-base-300 rounded-lg w-20 sm:w-36 md:w-38"
            />

            <img
              src={news3}
              alt="News tertiary"
              className="absolute left-3 bottom-17 border border-gray-300 rounded-2xl w-19 sm:w-30 md:w-44"
            />
          </div>
        </div>
      </section>

      <section className="w-11/12 mx-auto mb-35">
        <h1 className="text-3xl font-semibold text-left ">Our Blog</h1>
        <p className="text-lg text-left mt-2 mb-15">
          Aliquam lacinia diam quis lacus euismod
        </p>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          <div
            data-aos="fade-up"
            className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-500"
          >
            {/* Image container with hover scale */}
            <div className="overflow-hidden">
              <img
                src={blog1}
                alt="Beautiful Landscape"
                className="w-full h-60 object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            {/* Text content */}
            <div className="p-6">
              <details
                className="collapse bg-base-100 "
                name="my-accordion-det-1"
              >
                <summary className="collapse-title font-semibold">
                  <h2 className="text-lg  mb-2 text-gray-800">
                    December 2, 2022
                  </h2>
                  <p className="text-gray-600 mb-4 hover:underline hover:text-pink-500 transition-colors cursor-pointer">
                    Front becomes an official Instagram Marketing Partner
                  </p>
                </summary>
                <div className="collapse-content text-sm">
                  <p className="text-gray-600  transition-colors cursor-pointer">
                    Front is proud to announce its official partnership with
                    Instagram as a verified Marketing Partne
                  </p>
                </div>
              </details>
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-500"
          >
            {/* Image container with hover scale */}
            <div className="overflow-hidden">
              <img
                src={blog2}
                alt="Beautiful Landscape"
                className="w-full h-60 object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            {/* Text content */}
            <div className="p-6">
              <details
                className="collapse bg-base-100 "
                name="my-accordion-det-1"
              >
                <summary className="collapse-title font-semibold">
                  <h2 className="text-lg  mb-2 text-gray-800">June 14, 2024</h2>
                  <p className="text-gray-600 mb-4 hover:underline hover:text-pink-500 transition-colors cursor-pointer">
                    Start an online business and work from home
                  </p>
                </summary>
                <div className="collapse-content text-sm">
                  <p className="text-gray-600  transition-colors cursor-pointer">
                    Launching your own online business lets you unlock the
                    freedom to work
                  </p>
                </div>
              </details>
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-500"
          >
            {/* Image container with hover scale */}
            <div className="overflow-hidden">
              <img
                src={blog3}
                alt="Beautiful Landscape"
                className="w-full h-60 object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            {/* Text content */}
            <div className="p-6">
              <details
                className="collapse bg-base-100 "
                name="my-accordion-det-1"
              >
                <summary className="collapse-title font-semibold">
                  <h2 className="text-lg  mb-2 text-gray-800">
                    December 29, 2023
                  </h2>
                  <p className="text-gray-600 mb-4 hover:underline hover:text-pink-500 transition-colors cursor-pointer">
                    Start an online business and work from home right now
                  </p>
                </summary>
                <div className="collapse-content text-sm">
                  <p className="text-gray-600  transition-colors cursor-pointer">
                    Start your online business today and enjoy the freedom of
                    working from home
                  </p>
                </div>
              </details>
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-500"
          >
            {/* Image container with hover scale */}
            <div className="overflow-hidden">
              <img
                src={blog4}
                alt="Beautiful Landscape"
                className="w-full h-60 object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            {/* Text content */}
            <div className="p-6">
              <details
                className="collapse bg-base-100 "
                name="my-accordion-det-1"
              >
                <summary className="collapse-title font-semibold">
                  <h2 className="text-lg  mb-2 text-gray-800">
                    December 19, 2024
                  </h2>
                  <p className="text-gray-600 mb-4 hover:underline hover:text-pink-500 transition-colors cursor-pointer">
                    Start an online business and work home guide.
                  </p>
                </summary>
                <div className="collapse-content text-sm">
                  <p className="text-gray-600  transition-colors cursor-pointer">
                    Start your online business, work from home, step-by-step
                    complete guide.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      <section className="w-11/12 mx-auto mb-35">
        <h1 className="text-3xl font-semibold text-center ">
          Trusted by the world’s best Company
        </h1>
          <p className="text-lg mt-2 mb-15 text-center">
       Building lasting partnerships through quality, trust, and innovation
          </p>
       
        <Marquee className="">
          <div className="flex items-center gap-x-25 mt-15">
            <img src={company} alt="Company 1" className="h-8 object-contain" />
            <img
              src={company2}
              alt="Company 2"
              className="h-8 object-contain"
            />
            <img
              src={company3}
              alt="Company 3"
              className="h-8 object-contain"
            />
            <img
              src={company4}
              alt="Company 3"
              className="h-8 object-contain"
            />
            <img
              src={company5}
              alt="Company 3"
              className="h-8 object-contain"
            />
            <img
              src={company6}
              alt="Company 3"
              className="h-8 object-contain"
            />
            <img src={company} alt="Company 1" className="h-8 object-contain" />
            <img
              src={company2}
              alt="Company 2"
              className="h-8 object-contain"
            />
            <img
              src={company3}
              alt="Company 3"
              className="h-8 object-contain"
            />
            <img
              src={company4}
              alt="Company 3"
              className="h-8 object-contain"
            />
          </div>
        </Marquee>
      </section>

      <section className="w-11/12 mx-auto mb-35   ">
        <h1 className="text-3xl font-semibold  ">Top Rated Performer</h1>
         <p className="text-lg mt-1 mb-15">
       Meet the professionals behind every successful project
          </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12    mx-auto w-full">
          <div
            data-aos="zoom-in"
            className=" mx-auto w-[320px] md:justify-items-normal bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col items-center transition-all duration-300 hover:shadow-lg"
          >
            {/* Profile Image */}
            <div className="relative">
              <img
                src="https://i.pravatar.cc/150?img=32"
                alt="Robert Fox"
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
              />
              <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
            </div>

            {/* Name & Role */}
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              Robert Fox
            </h3>
            <p className="text-sm text-gray-500">Nursing Assistant</p>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-2 text-sm text-gray-700">
              <span className="text-yellow-400 text-base">★</span>
              <span className="font-medium">4.9</span>
              <span className="text-gray-400">(595 reviews)</span>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                Figma
              </span>
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                Sketch
              </span>
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                HTML5
              </span>
            </div>

            {/* Info Section */}
            <div className="grid grid-cols-3 gap-4 text-sm mt-5 text-gray-700">
              <div className="text-center">
                <p className="text-gray-400 text-xs">Location</p>
                <p className="font-semibold">London</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-xs">Rate</p>
                <p className="font-semibold">$90 / hr</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-xs">Job Success</p>
                <p className="font-semibold">%98</p>
              </div>
            </div>

            {/* View Profile Button */}
            <button class="relative flex items-center gap-1 py-1 px-7 mt-6 border-[4px] border-transparent font-semibold text-[16px] text-green-400 rounded-xl shadow-[0_0_0_2px_rgba(132,255,0,1)] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] group bg-transparent">
              <svg
                viewBox="0 0 24 24"
                class="arr-2 absolute left-[-25%] w-6 fill-green-400 z-[9] transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-4 group-hover:fill-[#212121]"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>

              <span class="relative z-[1] translate-x-[-12px] transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-3 group-hover:text-[#212121]">
                View Profile
              </span>

              <span class="circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20px] h-[20px] bg-green-400 rounded-full opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>

              <svg
                viewBox="0 0 24 24"
                class="arr-1 absolute right-4 w-6 fill-green-400 z-[9] transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:right-[-25%] group-hover:fill-[#212121]"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </div>

          <div
            data-aos="zoom-in-right"
            className="mx-auto w-[320px] bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col items-center transition-all duration-300 hover:shadow-lg"
          >
            {/* Profile Image */}
            <div className="relative">
              <img
                src={pic2}
                alt="Robert Fox"
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
              />
              <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
            </div>

            {/* Name & Role */}
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Fiver</h3>
            <p className="text-sm text-gray-500">Korim Bangima</p>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-2 text-sm text-gray-700">
              <span className="text-yellow-400 text-base">★</span>
              <span className="font-medium">3.9</span>
              <span className="text-gray-400">(295 reviews)</span>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                Figma
              </span>
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                SQL
              </span>
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                Node.js
              </span>
            </div>

            {/* Info Section */}
            <div className="grid grid-cols-3 gap-4 text-sm mt-5 text-gray-700">
              <div className="text-center">
                <p className="text-gray-400 text-xs">Location</p>
                <p className="font-semibold">London</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-xs">Rate</p>
                <p className="font-semibold">$50 / hr</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-xs">Job Success</p>
                <p className="font-semibold">%58</p>
              </div>
            </div>

            {/* View Profile Button */}
            <button class="relative flex items-center gap-1 py-1 px-7 mt-6 border-[4px] border-transparent font-semibold text-[16px] text-green-400 rounded-xl shadow-[0_0_0_2px_rgba(132,255,0,1)] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] group bg-transparent">
              <svg
                viewBox="0 0 24 24"
                class="arr-2 absolute left-[-25%] w-6 fill-green-400 z-[9] transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-4 group-hover:fill-[#212121]"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>

              <span class="relative z-[1] translate-x-[-12px] transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-3 group-hover:text-[#212121]">
                View Profile
              </span>

              <span class="circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20px] h-[20px] bg-green-400 rounded-full opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>

              <svg
                viewBox="0 0 24 24"
                class="arr-1 absolute right-4 w-6 fill-green-400 z-[9] transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:right-[-25%] group-hover:fill-[#212121]"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </div>

          <div
            data-aos="zoom-in-left"
            className="mx-auto w-[320px] bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col items-center transition-all duration-300 hover:shadow-lg"
          >
            {/* Profile Image */}
            <div className="relative">
              <img
                src={pic3}
                alt="Robert Fox"
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
              />
              <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
            </div>

            {/* Name & Role */}
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Upwork</h3>
            <p className="text-sm text-gray-500">
              Darrell Steward Jacob Howard
            </p>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-2 text-sm text-gray-700">
              <span className="text-yellow-400 text-base">★</span>
              <span className="font-medium">6.9</span>
              <span className="text-gray-400">(2195 reviews)</span>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                React
              </span>
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                Sketch
              </span>
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                JS
              </span>
            </div>

            {/* Info Section */}
            <div className="grid grid-cols-3 gap-4 text-sm mt-5 text-gray-700">
              <div className="text-center">
                <p className="text-gray-400 text-xs">Location</p>
                <p className="font-semibold">London</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-xs">Rate</p>
                <p className="font-semibold">$120 / hr</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-xs">Job Success</p>
                <p className="font-semibold">%68</p>
              </div>
            </div>

            {/* View Profile Button */}
            <button class="relative flex items-center gap-1 py-1 px-7 mt-6 border-[4px] border-transparent font-semibold text-[16px] text-green-400 rounded-xl shadow-[0_0_0_2px_rgba(132,255,0,1)] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] group bg-transparent">
              <svg
                viewBox="0 0 24 24"
                class="arr-2 absolute left-[-25%] w-6 fill-green-400 z-[9] transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-4 group-hover:fill-[#212121]"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>

              <span class="relative z-[1] translate-x-[-12px] transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-3 group-hover:text-[#212121]">
                View Profile
              </span>

              <span class="circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20px] h-[20px] bg-green-400 rounded-full opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>

              <svg
                viewBox="0 0 24 24"
                class="arr-1 absolute right-4 w-6 fill-green-400 z-[9] transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:right-[-25%] group-hover:fill-[#212121]"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </div>

          <div
            data-aos="zoom-in-up"
            className="mx-auto w-[320px] bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col items-center transition-all duration-300 hover:shadow-lg"
          >
            {/* Profile Image */}
            <div className="relative">
              <img
                src={pic5}
                alt="Robert Fox"
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
              />
              <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
            </div>

            {/* Name & Role */}
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Online</h3>
            <p className="text-sm text-gray-500">Noah Collins</p>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-2 text-sm text-gray-700">
              <span className="text-yellow-400 text-base">★</span>
              <span className="font-medium">3.9</span>
              <span className="text-gray-400">(495 reviews)</span>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                Go
              </span>
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                Doker
              </span>
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                C++
              </span>
            </div>

            {/* Info Section */}
            <div className="grid grid-cols-3 gap-4 text-sm mt-5 text-gray-700">
              <div className="text-center">
                <p className="text-gray-400 text-xs">Location</p>
                <p className="font-semibold">London</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-xs">Rate</p>
                <p className="font-semibold">$320 / hr</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-xs">Job Success</p>
                <p className="font-semibold">%78</p>
              </div>
            </div>

            <button class="relative flex items-center gap-1 py-1 px-7 mt-6 border-[4px] border-transparent font-semibold text-[16px] text-green-400 rounded-xl shadow-[0_0_0_2px_rgba(132,255,0,1)] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] group bg-transparent">
              <svg
                viewBox="0 0 24 24"
                class="arr-2 absolute left-[-25%] w-6 fill-green-400 z-[9] transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-4 group-hover:fill-[#212121]"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>

              <span class="relative z-[1] translate-x-[-12px] transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-3 group-hover:text-[#212121]">
                View Profile
              </span>

              <span class="circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20px] h-[20px] bg-green-400 rounded-full opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>

              <svg
                viewBox="0 0 24 24"
                class="arr-1 absolute right-4 w-6 fill-green-400 z-[9] transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:right-[-25%] group-hover:fill-[#212121]"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </div>

          <div
            data-aos="fade-up"
            className=" mx-auto w-[320px] bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col items-center transition-all duration-300 hover:shadow-lg"
          >
            {/* Profile Image */}
            <div className="relative">
              <img
                src={pic6}
                alt="Robert Fox"
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
              />
              <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
            </div>

            {/* Name & Role */}
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              Official
            </h3>
            <p className="text-sm text-gray-500">Isabella Hayes</p>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-2 text-sm text-gray-700">
              <span className="text-yellow-400 text-base">★</span>
              <span className="font-medium">8.9</span>
              <span className="text-gray-400">(7195 reviews)</span>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                C#
              </span>
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                Python
              </span>
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                Java
              </span>
            </div>

            {/* Info Section */}
            <div className="grid grid-cols-3 gap-4 text-sm mt-5 text-gray-700">
              <div className="text-center">
                <p className="text-gray-400 text-xs">Location</p>
                <p className="font-semibold">London</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-xs">Rate</p>
                <p className="font-semibold">$720 / hr</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-xs">Job Success</p>
                <p className="font-semibold">%98</p>
              </div>
            </div>

            {/* View Profile Button */}
            <button class="relative flex items-center gap-1 py-1 px-7 mt-6 border-[4px] border-transparent font-semibold text-[16px] text-green-400 rounded-xl shadow-[0_0_0_2px_rgba(132,255,0,1)] cursor-pointer overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] group bg-transparent">
              <svg
                viewBox="0 0 24 24"
                class="arr-2 absolute left-[-25%] w-6 fill-green-400 z-[9] transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-4 group-hover:fill-[#212121]"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>

              <span class="relative z-[1] translate-x-[-12px] transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-3 group-hover:text-[#212121]">
                View Profile
              </span>

              <span class="circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20px] h-[20px] bg-green-400 rounded-full opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>

              <svg
                viewBox="0 0 24 24"
                class="arr-1 absolute right-4 w-6 fill-green-400 z-[9] transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:right-[-25%] group-hover:fill-[#212121]"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
