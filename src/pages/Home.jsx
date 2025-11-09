import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import {
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
  HiOutlineUsers,
} from "react-icons/hi";
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
import pic4 from "../assets/women7.jpg";
import pic7 from "../assets/postes.png";
import pic5 from "../assets/women2.png";
import pic6 from "../assets/women4.png";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { Briefcase, Users, FileText, Building2 } from "lucide-react";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

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
                <HiOutlineUsers className="w-11 h-8 mx-auto font-bold animate-pulse  text-orange-500" />
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
                <FaRegHandshake className="w-11 h-8 mx-auto animate-pulse text-orange-500"></FaRegHandshake>
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
                <HiOutlineCreditCard className="w-11 h-8 mx-auto animate-pulse text-orange-500"></HiOutlineCreditCard>
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
                <HiOutlineSupport className="w-11 h-8 mx-auto animate-pulse text-orange-500"></HiOutlineSupport>
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

      <section className="w-11/12 mx-auto mb-35">
        <h1 className="text-2xl md:text-3xl text-gray-900 text-center font-semibold">
          Letas 6 Job Detlise
        </h1>
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
             <button class="relative w-[150px] flex items-center gap-1 py-2 px-8 border-2 border-orange-500 font-semibold text-[16px] text-orange-500 rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group bg-transparent">
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
                  <h2 className="text-lg  mb-2 text-orange-500">
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
                  <h2 className="text-lg  mb-2 text-orange-500">June 14, 2024</h2>
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
                  <h2 className="text-lg  mb-2 text-orange-500">
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
                  <h2 className="text-lg  mb-2 text-orange-500">
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

      <section className="w-full bg-[#f6faf7] py-20 px-5 mb-35">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
          {/* Left Side */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
              Find the Perfect Freelancer for Your Next Big Project
            </h2>
            <p className="text-gray-500 mb-8">
              Freeio is a modern freelance marketplace that connects talented
              professionals with clients around the world. Whether you’re a
              designer, developer, writer, or marketer — we help you grow your
              business and showcase your skills.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-orange-500">
                  4.9/
                  <CountUp start={0} end={5} />{" "}
                </h3>
                <p className="text-gray-500 text-sm">
                  Clients rate professionals on Freeio
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-orange-500">
                  {" "}
                  <CountUp start={0} end={95}></CountUp>%
                </h3>
                <p className="text-gray-500 text-sm">
                  90 % of customers are satisfied
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-orange-500">
                  Award Winner
                </h3>
                <p className="text-gray-500 text-sm">
                  G2’s 2025 Best Software Awards
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1">
            <div className="bg-white shadow-md rounded-2xl p-8 max-w-md mx-auto">
              <h4 className="text-orange-500 font-semibold mb-3">Great Work</h4>
              <p className="text-gray-700 mb-6">
                Discover a global network of experts ready to bring your ideas
                to life. From startups to enterprises, we make it simple to
                hire, manage, and pay freelancers — all in one secure platform.
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://i.pravatar.cc/50?img=5"
                  alt="user"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-gray-900">Courtney Henry</p>
                  <p className="text-sm text-gray-500">Web Designer</p>
                </div>
              </div>
            </div>

            {/* Slider Arrows */}
            <div className="flex justify-center items-center gap-6 mt-6">
              <button className="p-2 rounded-full border hover:bg-gray-100 transition">
                <HiOutlineArrowLeft className="text-xl text-gray-700" />
              </button>
              <div className="flex gap-2">
                <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                <span className="w-2 h-2 rounded-full bg-gray-900"></span>
                <span className="w-2 h-2 rounded-full bg-gray-400"></span>
              </div>
              <button className="p-2 rounded-full border hover:bg-gray-100 transition">
                <HiOutlineArrowRight className="text-xl text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-11/12 mx-auto mb-35   ">
        <h1 className="text-3xl font-semibold text-center ">
          Top Rated Performer
        </h1>
        <p className="text-lg mt-1 mb-15 text-center">
          Meet the professionals behind every successful project
        </p>
        <div className="grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-12    mx-auto w-full">
          <div
            data-aos="zoom-in"
            className=" mx-auto w-[360px] md:justify-items-normal bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col items-center transition-all duration-300 hover:shadow-lg"
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
            <p className="text-sm text-orange-500">Nursing Assistant</p>

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
             <button class="relative flex mt-5   items-center gap-1 py-1 px-12 border-2 border-orange-500 font-semibold text-[16px] text-orange-500 rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group bg-transparent">
                {/* <!-- Left arrow --> */}
                <svg
                  viewBox="0 0 24 24"
                  class="absolute left-[-25%] w-6 z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-4 group-hover:fill-white"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>

                <span class="relative z-10 -translate-x-3 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-2 group-hover:text-white">
                  View Profile
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

          <div
            data-aos="zoom-in-left"
            className="mx-auto w-[360px] bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col items-center transition-all duration-300 hover:shadow-lg"
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
            <p className="text-sm text-orange-500">
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
              <button class="relative flex mt-5   items-center gap-1 py-1 px-12 border-2 border-orange-500 font-semibold text-[16px] text-orange-500 rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group bg-transparent">
                {/* <!-- Left arrow --> */}
                <svg
                  viewBox="0 0 24 24"
                  class="absolute left-[-25%] w-6 z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-4 group-hover:fill-white"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>

                <span class="relative z-10 -translate-x-3 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-2 group-hover:text-white">
                  View Profile
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

          <div
            data-aos="zoom-in-up"
            className="mx-auto w-[360px] bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col items-center transition-all duration-300 hover:shadow-lg"
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
            <p className="text-sm text-orange-500">Noah Collins</p>

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

          <button class="relative flex mt-5   items-center gap-1 py-1 px-12 border-2 border-orange-500 font-semibold text-[16px] text-orange-500 rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group bg-transparent">
                {/* <!-- Left arrow --> */}
                <svg
                  viewBox="0 0 24 24"
                  class="absolute left-[-25%] w-6 z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-4 group-hover:fill-white"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>

                <span class="relative z-10 -translate-x-3 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-2 group-hover:text-white">
                  View Profile
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

          <div
            data-aos="fade-up"
            className=" mx-auto w-[360px] bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col items-center transition-all duration-300 hover:shadow-lg"
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
            <p className="text-sm text-orange-500">Isabella Hayes</p>

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
           <button class="relative flex mt-5   items-center gap-1 py-1 px-12 border-2 border-orange-500 font-semibold text-[16px] text-orange-500 rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group bg-transparent">
                {/* <!-- Left arrow --> */}
                <svg
                  viewBox="0 0 24 24"
                  class="absolute left-[-25%] w-6 z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-4 group-hover:fill-white"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>

                <span class="relative z-10 -translate-x-3 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-2 group-hover:text-white">
                  View Profile
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

          <div
            data-aos="fade-down-right"
            className="mx-auto w-[360px] bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col items-center transition-all duration-300 hover:shadow-lg"
          >
            {/* Profile Image */}
            <div className="relative">
              <img
                src={pic1}
                alt="Robert Fox"
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
              />
              <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
            </div>

            {/* Name & Role */}
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Fiver</h3>
            <p className="text-sm text-orange-500">Korim Bangima</p>

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
          <button class="relative flex mt-5   items-center gap-1 py-1 px-12 border-2 border-orange-500 font-semibold text-[16px] text-orange-500 rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group bg-transparent">
                {/* <!-- Left arrow --> */}
                <svg
                  viewBox="0 0 24 24"
                  class="absolute left-[-25%] w-6 z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-4 group-hover:fill-white"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>

                <span class="relative z-10 -translate-x-3 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-2 group-hover:text-white">
                  View Profile
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

          <div
            data-aos="fade-up-right"
            className="mx-auto w-[360px] bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col items-center transition-all duration-300 hover:shadow-lg"
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
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              Market Place
            </h3>
            <p className="text-sm text-orange-500">JOS Don</p>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-2 text-sm text-gray-700">
              <span className="text-yellow-400 text-base">★</span>
              <span className="font-medium">4.9</span>
              <span className="text-gray-400">(675 reviews)</span>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                Figma
              </span>
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                C++
              </span>
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                MongoDb
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

            {/* View Profile Button */}
         <button class="relative flex mt-5   items-center gap-1 py-1 px-12 border-2 border-orange-500 font-semibold text-[16px] text-orange-500 rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group bg-transparent">
                {/* <!-- Left arrow --> */}
                <svg
                  viewBox="0 0 24 24"
                  class="absolute left-[-25%] w-6 z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-4 group-hover:fill-white"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>

                <span class="relative z-10 -translate-x-3 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-2 group-hover:text-white">
                  View Profile
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

          <div
            data-aos="zoom-in-right"
            className="mx-auto w-[360px] bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col items-center transition-all duration-300 hover:shadow-lg"
          >
            {/* Profile Image */}
            <div className="relative">
              <img
                src={pic4}
                alt="Robert Fox"
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
              />
              <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
            </div>

            {/* Name & Role */}
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              Official
            </h3>
            <p className="text-sm text-orange-500">Merry Doms</p>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-2 text-sm text-gray-700">
              <span className="text-yellow-400 text-base">★</span>
              <span className="font-medium">3.9</span>
              <span className="text-gray-400">(1675 reviews)</span>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                ALl
              </span>
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                C++
              </span>
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                HP
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
                <p className="font-semibold">$1320 / hr</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-xs">Job Success</p>
                <p className="font-semibold">%88</p>
              </div>
            </div>

            {/* View Profile Button */}
      <button class="relative flex mt-5   items-center gap-1 py-1 px-12 border-2 border-orange-500 font-semibold text-[16px] text-orange-500 rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group bg-transparent">
                {/* <!-- Left arrow --> */}
                <svg
                  viewBox="0 0 24 24"
                  class="absolute left-[-25%] w-6 z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-4 group-hover:fill-white"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>

                <span class="relative z-10 -translate-x-3 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-2 group-hover:text-white">
                  View Profile
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

          <div
            data-aos="zoom-in-right"
            className="mx-auto w-[360px] bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col items-center transition-all duration-300 hover:shadow-lg"
          >
            {/* Profile Image */}
            <div className="relative">
              <img
                src={pic7}
                alt="Robert Fox"
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
              />
              <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
            </div>

            {/* Name & Role */}
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              Market{" "}
            </h3>
            <p className="text-sm text-orange-500">Limu Islam</p>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-2 text-sm text-gray-700">
              <span className="text-yellow-400 text-base">★</span>
              <span className="font-medium">5.9</span>
              <span className="text-gray-400">(975 reviews)</span>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                New
              </span>
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                C++
              </span>
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                PHP
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
                <p className="font-semibold">$170 / hr</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-xs">Job Success</p>
                <p className="font-semibold">%48</p>
              </div>
            </div>

            {/* View Profile Button */}
           <button class="relative flex mt-5   items-center gap-1 py-1 px-12 border-2 border-orange-500 font-semibold text-[16px] text-orange-500 rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group bg-transparent">
                {/* <!-- Left arrow --> */}
                <svg
                  viewBox="0 0 24 24"
                  class="absolute left-[-25%] w-6 z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-4 group-hover:fill-white"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>

                <span class="relative z-10 -translate-x-3 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-2 group-hover:text-white">
                  View Profile
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
        </div>
      </section>

      <section className=" w-12/12 mx-auto bg-gray-50 mb-35">
        <div className="w-11/12 mx-auto py-16 " ref={ref}>
          {/* Header Part */}
          <div className="text-center mb-12 px-4">
            <span className="px-4 py-1 text-sm rounded-full  text-orange-500 font-semibold">
              Success Business Award
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold  text-gray-800 mt-4">
              Our Success & Award
            </h2>
            <p className="max-w-2xl mx-auto mt-3 text-gray-500">
              We take pride in our journey of connecting skilled freelancers
              with global clients. Through dedication, trust, and innovation,
              we’ve built a thriving marketplace where talent meets opportunity.
            </p>
          </div>

          {/* CountUp Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6  mx-auto">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-2xl py-10 text-center hover:shadow-lg transition-all hover:bg-base-200  group">
              <div className="flex justify-center mb-4  ">
                <Briefcase
                  size={40}
                  className="text-gray-800 group-hover:animate-bounce"
                />
              </div>
              <h3 className="text-3xl font-bold text-orange-500">
                {inView && (
                  <CountUp start={0} end={12376} duration={2.5} separator="," />
                )}
              </h3>
              <p className="text-gray-500 mt-2">Live Jobs</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-2xl py-10 text-center hover:shadow-lg transition-all group">
              <div className="flex justify-center mb-4 ">
                <Users
                  size={40}
                  className="text-gray-800 group-hover:animate-bounce"
                />
              </div>
              <h3 className="text-3xl font-bold text-orange-500">
                {inView && (
                  <CountUp start={0} end={89562} duration={2.5} separator="," />
                )}
              </h3>
              <p className="text-gray-500 mt-2">Jobs Candidate</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-md rounded-2xl py-10 text-center hover:shadow-lg transition-all group">
              <div className="flex justify-center mb-4">
                <FileText
                  size={40}
                  className="text-gray-800 group-hover:animate-bounce"
                />
              </div>
              <h3 className="text-3xl font-bold text-orange-500">
                {inView && (
                  <CountUp start={0} end={28166} duration={2.5} separator="," />
                )}
              </h3>
              <p className="text-gray-500 mt-2">Active Resume</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-md rounded-2xl py-10 text-center hover:shadow-lg transition-all group">
              <div className="flex justify-center mb-4 ">
                <Building2
                  size={40}
                  className="text-gray-800 group-hover:animate-bounce"
                />
              </div>
              <h3 className="text-3xl font-bold text-orange-500">
                {inView && (
                  <CountUp start={0} end={8966} duration={2.5} separator="," />
                )}
              </h3>
              <p className="text-gray-500 mt-2">Companies</p>
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
    </div>
  );
};

export default Home;
